import { parse, format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const formatDateFromAPI = (date, outputFormat = 'dd/MM/yyyy', fallback = '-') => {
  if (!date) {
    return fallback
  }

  return format(utcToZonedTime(date), outputFormat)
}

export const formatDateRegex = value => {
  const regex = /^(\d{0,2})(\d{0,2})(\d{0,4})$/g

  if (!regex.test(value)) {
    return null
  }

  return value.replace(regex, (regex, $1, $2, $3) => [$1, $2, $3].filter(group => !!group).join('/'))
}
