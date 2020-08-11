
function NotAuthenticated (app, route) {
  return !app.$auth.is_authenticated && (route.name != 'login' && route.name != 'register')
}
function AlreadyAuthenticatedAndGoingToLoginRegisterPage (app, route) {
  return app.$auth.is_authenticated && (route.name == 'login' || route.name == 'register')
}

export default function ({ store, route, redirect, app }) {
  if (NotAuthenticated(app, route)) {
    redirect('/login')
  }
  if (AlreadyAuthenticatedAndGoingToLoginRegisterPage(app, route)) {
    redirect('/')
  }
}