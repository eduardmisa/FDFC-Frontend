import Request from '@/api/classes/Request'
import Response from '@/api/classes/Response'

export class FormStateService extends Request {
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
    async View (code) {
        return this.get_request({
            slug: `${code}/`,
        })
    }
    async Create (form) {
        return this.post_request({
            form
        })
    }
    async Update (code, form) {
        return this.put_request({
            slug: `${code}/`,
            form
        })
    }
    async Delete (code) {
        return this.delete_request({
            slug: `${code}/`,
        })
    }

    async GetByUser (userCode) {
        return this.get_request({
            slug: `get-by-user/`,
            params: [
                {key: 'userCode', value: userCode},
            ]
        })
    }
}
