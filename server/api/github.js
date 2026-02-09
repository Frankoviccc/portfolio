export default defineCachedEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const body = await readBody(event)

        return await $fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${config.githubToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'nuxt-portfolio-app'
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
}, {
    maxAge: process.env.NODE_ENV === 'development' ? 0 : 60 * 60 * 24 * 30,
})