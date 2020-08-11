
function NotAuthenticated (app, route) {
  return !app.$auth.is_authenticated && route.name != 'login'
}
function AlreadyAuthenticatedAndGoingToLoginPage (app, route) {
  return app.$auth.is_authenticated && route.name == 'login'
}

export default function ({ store, route, redirect, app }) {
  debugger
  if (NotAuthenticated(app, route))
    redirect('/login')
  debugger
  if (AlreadyAuthenticatedAndGoingToLoginPage(app, route))
    redirect('/')
}
  