import { User } from './api/models/user.model'
import { db } from './database'

const getAllUsers = async () => db<User>('users').select('*')

const runTime = async () => {
  const users = await getAllUsers()
  console.log({ users })
}

// runTime()
