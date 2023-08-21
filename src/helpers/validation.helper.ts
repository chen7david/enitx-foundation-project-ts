import { ClassConstructor, plainToClass } from 'class-transformer'
import { ValidationError, validate } from 'class-validator'

type TValidateOneResponse<T> = {
  data: T
  details: ValidationError[]
  errorCount: number
}

type TValidateManyResponse<T> = {
  data: T[]
  failed: T[]
  details: ValidationError[]
  errorCount: number
}

export const validateOne = async <T extends {}, V>(
  cls: ClassConstructor<T>,
  payload: V
): Promise<TValidateOneResponse<T>> => {
  const instance = plainToClass(cls, payload)
  const details = await validate(instance)
  return { data: instance, details, errorCount: details.length }
}

export const validateMany = async <T extends {}, V>(
  cls: ClassConstructor<T>,
  payload: V[]
): Promise<TValidateManyResponse<T>> => {
  const passed: T[] = []
  const failed: T[] = []
  let errors: ValidationError[] = []
  const instances = payload.map(item => plainToClass(cls, item))
  for (let instance of instances) {
    const { data, errorCount, details } = await validateOne(cls, instance)
    if (errorCount > 0) {
      errors = [...errors, ...details]
      failed.push(data)
    } else {
      passed.push(data)
    }
  }
  return { data: passed, failed, details: errors, errorCount: errors.length }
}
