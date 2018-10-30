export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = state.city
    } catch (e) {}
  }
}
