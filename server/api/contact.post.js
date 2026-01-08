export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const { name, email, message } = await readBody(event)

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.resendKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: 'frank_struikk@hotmail.com',
            subject: `Nieuw bericht van ${name}`,
            text: `Van: ${name} (${email})\n\n${message}`
        })
    })

    if (!res.ok) throw createError({ statusCode: 500 })
    return { success: true }
})