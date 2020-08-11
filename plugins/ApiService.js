import {AuthService} from '@/api/AuthService'
import {UserService} from '@/api/UserService'
import {FormStateService} from '@/api/FormStateService'


export default (context, inject) => {
    inject('api', {
        AuthService: new AuthService(context.$axios, '/api/v1/auth/'),
        UserService: new UserService(context.$axios, '/api/v1/management/users/'),
        FormStateService: new FormStateService(context.$axios, '/api/v1/management/form-states/'),
    })
}
