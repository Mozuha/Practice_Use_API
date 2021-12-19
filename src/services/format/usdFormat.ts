export const usdFormat = (price: string) => {
  const usdFormatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return usdFormatter.format(parseFloat(price))
}