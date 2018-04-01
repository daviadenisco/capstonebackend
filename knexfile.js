module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/studentinfodb'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
