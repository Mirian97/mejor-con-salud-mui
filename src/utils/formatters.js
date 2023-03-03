export function handleFormatDate(date) {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  }
  const dateFormatted = new Date(date).toLocaleDateString('pt-br', options)
  return dateFormatted
}
