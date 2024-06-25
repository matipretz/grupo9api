const config = {
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.DB,
  port: process.env.DB_PORT,
  connectTimeout: 10000,
  trace: true
}
export default config
