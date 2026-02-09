<template>
    <div
        v-if="data"
        class="widget bento"
    >
        <div class="widget__inner">
            <h2 class="widget__title">
                Contributions
            </h2>

            <div class="widget__contributions">
                <div class="widget__contributions-wrapper">
                    <table class="widget__table">
                        <thead class="widget__table-head">
                        <tr class="widget__months-row">
                            <th class="widget__weekday-column-header"/>
                            <th
                                v-for="label in monthLabels"
                                :key="label.name"
                                :colspan="label.weeksInMonth"
                                class="widget__month-label"
                            >
                                {{ label.name }}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(weekday, dayIndex) in 7"
                            :key="dayIndex"
                        >
                            <td class="widget__weekday-label">
                                <span v-if="dayIndex % 2 === 1">
                                    {{ weekdays[Math.floor(dayIndex / 2)] }}
                                </span>
                            </td>
                            <td
                                v-for="(week, weekIndex) in formattedWeeks"
                                :key="weekIndex"
                                class="widget__day-cell"
                            >
                                <div
                                    v-if="week.contributionDays[dayIndex] !== undefined"
                                    class="widget__day"
                                    :class="{ 'widget__day-empty': week.contributionDays[dayIndex] === null }"
                                    :style="{
                                            backgroundColor: week.contributionDays[dayIndex]
                                                ? getContributionColor(week.contributionDays[dayIndex].contributionCount)
                                                : 'transparent'
                                        }"
                                    :title="week.contributionDays[dayIndex]
                                            ? `${week.contributionDays[dayIndex].contributionCount} contributions op ${week.contributionDays[dayIndex].formattedDate}`
                                            : 'Geen data beschikbaar'"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="widget__legend">
                <span>Minder</span>
                <div class="widget__legend-colors">
                    <div class="widget__legend-day"/>
                    <div class="widget__legend-day"/>
                    <div class="widget__legend-day"/>
                    <div class="widget__legend-day"/>
                    <div class="widget__legend-day"/>
                </div>
                <span>Meer</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const endDate = new Date()
const startDate = new Date()
startDate.setFullYear(startDate.getFullYear() - 1)

const { data } = await useFetch('/api/github', {
    method: 'POST',
    body: {
        fromDate: startDate,
        toDate: endDate
    },
    key: 'github-contributions',
})

// Functie om datum te formatteren zonder hydration issues
const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}

const getContributionColor = (count) => {
    if (count === 0) return 'var(--color-neutral-200)'
    if (count < 5) return '#9be9a8'
    if (count < 10) return '#40c463'
    if (count < 15) return '#30a14e'
    return '#216e39'
}

const weeks = computed(() => {
    // Pak alle weken van het kalenderjaar
    const apiWeeks = (data.value?.data?.user?.contributionsCollection?.contributionCalendar?.weeks) || []

    // Check of we de eerste week moeten aanvullen, eerste dag van de week is zondag
    // als 1 januari dus niet op die dag valt, moeten we empty cells toevoegen

    if (apiWeeks.length > 0) {
        // Pak eerste week van kalenderjaar
        const firstWeek = apiWeeks[0]
        // Pak eerste dag die true is
        const firstDay = firstWeek?.contributionDays.find(day => day)

        if (firstDay) {
            // Pak de datum van eerste dag
            const firstDate = new Date(firstDay.date)
            // Pak de index van de eerste dag, zondag zou 0 zijn
            const dayOfWeek = firstDate.getDay()

            // Als de eerste dag niet zondag is, voeg lege dagen toe aan het begin
            if (dayOfWeek > 0) {
                const paddedDays = []
                for (let i = 0; i < dayOfWeek; i++) {
                    paddedDays.push(null) // Voeg het aantal legen dagen toe tot 1 januari
                }
                // Voeg de bestaande dagen toe
                firstWeek?.contributionDays.forEach(day => paddedDays.push(day))

                // Zorg dat we exact 7 dagen hebben
                while (paddedDays.length < 7) {
                    paddedDays.push(null)
                }

                // Vervang de eerste week
                firstWeek.contributionDays = paddedDays.slice(0, 7)
            }
        }
    }

    return apiWeeks
})

// Nieuwe computed property met geformatteerde datums
const formattedWeeks = computed(() => {
    return weeks.value.map(week => ({
        ...week,
        contributionDays: week.contributionDays.map(day => {
            if (!day) return null
            return {
                ...day,
                formattedDate: formatDate(day.date)
            }
        })
    }))
})

const monthLabels = computed(() => {
    const labels = []
    let currentMonth = -1
    let weeksCount = 0

    weeks.value.forEach((week, index) => {
        // Zoek de eerste dag in deze week die in het huidige kalender jaar valt
        const relevantDay = week.contributionDays.find(day => day)

        if (relevantDay) {
            // Pak de maand van de relevante dag
            const date = new Date(relevantDay.date)
            const month = date.getMonth()

            // Check of die maand niet de currentMonth is
            if (month !== currentMonth) {
                if (currentMonth !== -1) {
                    // Zet de weken van het label gelijk aan weeksCount
                    labels[labels.length - 1].weeksInMonth = weeksCount
                }
                labels.push({
                    name: months[month],
                    weekIndex: index,
                    weeksInMonth: 0
                })
                currentMonth = month
                weeksCount = 1
            } else {
                weeksCount++
            }
        }
    })

    // Laatste maand afsluiten
    if (labels.length > 0) {
        labels[labels.length - 1].weeksInMonth = weeksCount
    }

    return labels
})

const months = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
const weekdays = ['Ma', 'Wo', 'Vr']
</script>

<style lang="scss">
@use 'fsk-git-widget';
</style>