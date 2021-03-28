export default {
    registerCoach(state, payload) {
        state.coaches.push(payload)
    },
    // data(payload) from backend
    setCoaches(state, payload) {
        state.coaches = payload
    }
}