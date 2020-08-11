import Request from '@/api/classes/Request'
import Response from '@/api/classes/Response'

export class UserService extends Request {
    constructor (axios, baseUrl) {
        super(axios, baseUrl)
    }

    async CountAll () {
        return this.get_request({
            slug: `count-all/`,
        })
    }
    async List ({page, pageSize, filterField, filterValue}) {
        return this.get_request({
            params: [
                {key: 'page', value: page},
                {key: 'page-size', value: pageSize},
                {key: filterField, value: filterValue},
            ]
        })
    }
    async View (userId) {
        return this.get_request({
            slug: `${userId}/`,
        })
    }
    async Create (form) {
        return this.post_request({
            form
        })
    }
    async Update (userId, form) {
        return this.put_request({
            slug: `${userId}/`,
            form
        })
    }
    async Delete (userId) {
        return this.delete_request({
            slug: `${userId}/`,
        })
    }


    async SaveFormState (userId, form) {
        return this.post_request({
            slug: `${userId}/save-form-state/`,
            form
        })
    }
}
