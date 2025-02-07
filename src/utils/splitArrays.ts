const splitArray = <T>(data: T[], itemsPerPage: number): T[][] => {
  const paginatedArrays: T[][] = []

  for (let i = 0; i < data.length; i += itemsPerPage) {
    paginatedArrays.push(data.slice(i, i + itemsPerPage))
  }

  return paginatedArrays
}
export default splitArray
