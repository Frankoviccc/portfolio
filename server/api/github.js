export default defineCachedEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()

        const currentYear = new Date().getFullYear()
        const fromDate = new Date(`${currentYear}-01-01T00:00:00Z`)
        const toDate = new Date(`${currentYear}-12-31T23:59:59Z`)

        return await $fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${config.githubToken}`,
                'Content-Type': 'application/json'
            },
            body: {
                query: `
                    query($userName:String!, $from:DateTime!, $to:DateTime!) {
                        user(login: $userName) {
                            contributionsCollection(from: $from, to: $to) {
                                contributionCalendar {
                                    totalContributions
                                    weeks {
                                        contributionDays {
                                            contributionCount
                                            date
                                            weekday
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    userName: 'Frankoviccc',
                    from: fromDate,
                    to: toDate
                }
            }
        })
    } catch (error) {
        console.error('GitHub API Error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch GitHub data'
        })
    }
}, {
    maxAge: 60 * 60 * 24 * 30,
})