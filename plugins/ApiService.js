import {AuthService} from '@/api/AuthService'
import {FormStateService} from '@/api/FormStateService'


export default (context, inject) => {
    inject('api', {
        AuthService: new AuthService(context.$axios, '/api/v1/auth/'),
        FormStateService: new FormStateService(context.$axios, '/api/v1/management/form-states/'),
    })
}
