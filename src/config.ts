import * as dotenv from 'dotenv'
import path from 'path'

export enum Stages {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  STAGING = 'staging'
}

interface IBaseConfig {
  enviroment: Stages
  debug: boolean
}

const getEnviromentStage = () => {
  const isValidStage = (stage: Stages) => Object.values(Stages).includes(stage)
  const NODE_ENV = process.env.NODE_ENV as Stages
  return isValidStage(NODE_ENV) ? NODE_ENV : Stages.DEVELOPMENT
}

const stage = getEnviromentStage()
dotenv.config({ path: path.resolve(__dirname, `../.env.${stage}`) })

export const config: IBaseConfig = {
  enviroment: stage,
  debug: stage === Stages.DEVELOPMENT ? true : false
}
