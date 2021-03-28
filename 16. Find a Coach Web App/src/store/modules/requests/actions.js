export default {
    async contactCoach(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        }
        const response = await fetch(`https://find-coach-6bd32-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,{
            method: 'POST',
            body: JSON.stringify(newRequest)
        })

        console.log('response', response)

        const responseData = await response.json()

        // newRequest objesine firebase den gelen id yi veriyoruz. name, id içeriyor

        newRequest.id = responseData.name
        newRequest.coachId = payload.coachId //server a coach id yi atmayayım diye

        context.commit('addRequest', newRequest)
    },

    async fetchRequests(context) {
        const coachId = context.rootGetters.userId
        const response = await fetch(`https://find-coach-6bd32-default-rtdb.firebaseio.com/requests/${coachId}.json`)

        const responseData = await response.json()
        
        const requests = []

        for(const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }

            requests.push(request)
        }

        context.commit('setRequests', requests)
    }
}