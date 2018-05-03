export default {
  mchangeCity (state, city) {
    state.city = city
    try {
      localStorage.setItem('city', city)
    } catch (e) {
      console.log(`errorLog: ${e}`)
    }
  }
}
