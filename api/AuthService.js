import Request from '@/api/classes/Request'
import Response from '@/api/classes/Response'

export class AuthService extends Request {
    constructor (axios, baseUrl) {
        super(axios, baseUrl)
        this._axios = axios
    }

    _axios = null


    async Register ({
        username,
        password,
        firstname,
        middlename,
        lastname}) {

        const form = {
            username,
            password,
            firstname,
            middlename,
            lastname
        }

        let url = `/api/v1/auth/register/`

        var response = null

        await this._axios.post(url, form)
        .then(function({data}) {
            response = new Response(true, data, null)
        })
        .catch(function(error) {
            response = new Response(false, null, error.response ? error.response.data : error)
        })

        return response
    }


    async Login ({username,
                  password}) {

        const form = {
            username,
            password
        }

        let url = `/api/v1/auth/login/`

        var response = null

        await this._axios.post(url, form)
        .then(function({data}) {
            response = new Response(true, data, null)
        })
        .catch(function(error) {
            response = new Response(false, null, error.response ? error.response.data : error)
        })

        return response
    }

    async CurrentUser (token) {
        if (!token) {
            return await this.get_request({
                slug: 'current-user/',
            })
        }
        else {
            let url = `/api/v1/auth/current-user/`

            var response = null
    
            await this.axios.get(url, { headers: { Authorization: `Bearer ${token}`}})
            .then(function({data}) {
                if ('username' in data)
                    response = new Response(true, data, null)
                else
                    response = new Response(false, null, 'Invalid current user data')    
              })
              .catch(function(error) {
                response = new Response(false, null, error && error.response ? error.response.data: 'Unknown Error')
              })
            return response
        }
    }
}