export default {
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOsv2XKjIyPwoA9VOQhv3TRyGKvMgU7N4', {
            method: 'POST',
            body: JSON.stringify({
              email: payload.email,
              password: payload.password,
              returnSecureToken: true  
            })
        })

        const responseData = await response.json()

        console.log(responseData)

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },

    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOsv2XKjIyPwoA9VOQhv3TRyGKvMgU7N4', {
            method: 'POST',
            body: JSON.stringify({
              email: payload.email,
              password: payload.password,
              returnSecureToken: true  
            })
        })

        const responseData = await response.json()

        console.log(responseData)

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },

    logout(context) {
        context.coomit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null
        })
    }
}