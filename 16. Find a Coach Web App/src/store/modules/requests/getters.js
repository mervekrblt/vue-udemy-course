export default {
    requests(state, _, _2, rootGetters) {
        const coachId = rootGetters.userId
        console.log('coachid',coachId)
        console.log(state.requests)
        return state.requests.filter(req => req.coachId === coachId)
    },

    hasRequests(_, getters) {
        console.log(getters.requests)
        return getters.requests && getters.requests.length > 0
    }
}