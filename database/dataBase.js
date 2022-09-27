import pkg from 'pg'
const { Pool } = pkg

export const pool = new Pool({
  user: 'postgres',
  password: '@Bleach23@',
  host: 'localhost',
  port: '5432',
  database: 'node_postgres',
})
