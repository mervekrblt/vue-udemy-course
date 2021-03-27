export default {
    registerCoach(context, data) {
        //console.log(formData)
        console.log(context)
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            hourlyRate: data.rate,
            description: data.desc,
            areas: data.areas
        }

        context.commit('registerCoach', coachData)
    }
}