let defaultCity = '沈阳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.getItem('city')
  }
} catch (e) {
  console.log(`errorLog: ${e}`)
}

export default {
  city: defaultCity
}
