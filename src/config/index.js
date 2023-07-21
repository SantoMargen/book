module.exports = {
    name: process.env.NODE_ENV,
    api: {
        port: process.env.API__PORT,
        jwtSecret: process.env.API__JWT_SECRET,
        cors: {
            origin: process.env.API__CORS__ORIGIN.split(','),
            methods: process.env.API__CORS__METHODS.split(','),
            allowedHeaders: process.env.API__CORS__ALLOWED_HEADERS.split(','),
            maxAge: Number(process.env.API__CORS__MAX_AGE),
            exposedHeaders: process.env.API__CORS__EXPOSED_HEADERS.split(','),
            credentials: process.env.API__CORS__CREDENTIALS === 'true',
        },
    },
    db: {
        username: process.env.DB__USERNAME,
        password: process.env.DB__PASSWORD,
        database: process.env.DB__DATABASE,
        host: process.env.DB__HOST,
        dialect: process.env.DB__DIALECT,
        port: process.env.DB__PORT,
    },
}