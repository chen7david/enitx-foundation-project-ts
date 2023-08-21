import type { Knex } from 'knex'
import { config } from './../config'

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: config.dbUrl,
    migrations: {
      directory: 'migrations'
    }
  },

  staging: {
    client: 'mysql2',
    connection: config.dbUrl,
    migrations: {
      directory: 'migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: config.dbUrl,
    migrations: {
      directory: 'migrations'
    }
  }
}

export default knexConfig
