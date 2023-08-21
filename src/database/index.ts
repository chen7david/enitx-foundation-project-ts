import { config } from '../config'
import knexConfig from './knexfile'
import * as Knex from 'knex'

export const db: Knex.Knex = Knex.knex(knexConfig[config.enviroment])
