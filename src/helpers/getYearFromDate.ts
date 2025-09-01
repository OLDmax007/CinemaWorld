export const getYearFromDate = (date: string) => {
    return date ? new Date(date).getFullYear() : 'No date'

}