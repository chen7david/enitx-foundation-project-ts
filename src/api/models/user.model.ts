import { IsString } from 'class-validator'
import { Expose } from 'class-transformer'
import daysjs from 'dayjs'

export type TUser = {
  username: string
  email: string
}

export class User implements TUser {
  @IsString()
  @Expose()
  username!: string

  @IsString()
  @Expose()
  email!: string

  @IsString()
  @Expose()
  date_of_birth!: string

  age() {
    const now = daysjs()
    const birth = daysjs(this.date_of_birth)
    const age = now.diff(birth, 'year')
    return age
  }
}
