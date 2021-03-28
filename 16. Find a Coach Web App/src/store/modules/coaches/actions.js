export default {
    async registerCoach(context, data) {
        //console.log(formData)
        //console.log(context)

        const userId = context.rootGetters.userId
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            hourlyRate: data.rate,
            description: data.desc,
            areas: data.areas
        }

        const response = await fetch(`https://find-coach-6bd32-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        })

        //const responseData = await response.json()
        // console.log(responseData)

        if(!response.ok) {
            //error...
        }

        context.commit('registerCoach', {
            // coachData yı aldım ve ona id ekledim 
            ...coachData,
            id: userId
        })
    },

    async loadedCoaches(context) {
        const response = await fetch(`https://find-coach-6bd32-default-rtdb.firebaseio.com/coaches.json`)
        const responseData = await response.json()
        console.log('loadedcoaches', responseData)

        if(!response.ok) {
            // error
        }

        const coaches = []

        for(const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                hourlyRate: responseData[key].hourlyRate,
                description: responseData[key].description,
                areas: responseData[key].areas,
            }

            coaches.push(coach)
        }

        context.commit('setCoaches', coaches)
    }
}