const seconds = 60*60*24*2

export const config = {
    secretKey: 'grupo9',
    token: {
        // En string declaramos la unidad (m, s, h, d), en number los segundos
        // tokenExpiresIn: 30
        // expiresIn: '1h',
        expiresIn: '48h',
    },
    cookie:
    {
        maxAge: seconds * 1000,
        httpOnly: true,
        signed: true
    }

}
