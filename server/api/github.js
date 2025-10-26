export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const body = await readBody(event)

        return await $fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${config.public.githubToken}`,
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
                    from: body.fromDate,
                    to: body.toDate
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
})