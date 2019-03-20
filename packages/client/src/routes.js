import Loading from "./components/loaders/layout-loader.js"
import Loadable from "react-loadable"
import requireAuth from "./utils/requireAuth.js"
import noAuth from "./utils/noAuth.js"

const getAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ "./layouts/about"),
  loading: Loading,
  delay: 200
})

const getAnnouncement = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'announcement' */ "./layouts/announcement"),
  loading: Loading
})

const getChangePassword = Loadable({
  loader: () => import("./layouts/change_password/change-password-ctrl.js"),
  loading: Loading
})

const getConfirmEmail = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'confirm-email' */ "./layouts/confirm-email"),
  loading: Loading
})

const getContact = Loadable({
  loader: () => import(/* webpackChunkName: 'contact' */ "./layouts/contact"),
  loading: Loading,
  delay: 200
})

/* const getCourseIntroduction = Loadable({ */
/*   loader: () => import("./layouts/courses/containers/course-introduction.js"), */
/*   loading: Loading, */
/*   delay: 200 */
/* }) */

const getCourseUpdate = Loadable({
  loader: () => import("./layouts/courses/containers/course-update.js"),
  loading: Loading,
  delay: 200
})

const getForgotPassword = Loadable({
  loader: () => import("./layouts/forgot_password/forgot-password-ctrl.js"),
  loading: Loading,
  delay: 200
})

const getCourses = Loadable({
  loader: () => import("./layouts/courses/containers/courses"),
  loading: Loading,
  delay: 200
})

const getCourseSettings = Loadable({
  loader: () => import("./layouts/courses/containers/course-settings.js"),
  loading: Loading
})

const getHome = Loadable({
  loader: () => import(/* webpackChunkName: 'contact' */ "./layouts/home"),
  loading: Loading,
  delay: 200
})

const getLogin = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'contact' */ "./layouts/login/login-ctrl.js"),
  loading: Loading,
  delay: 200
})

const getPricing = Loadable({
  loader: () => import(/* webpackChunkName: 'pricing' */ "./layouts/pricing"),
  loading: Loading,
  delay: 200
})

const getSignup = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'signup' */ "./layouts/signup/signup-ctrl.js"),
  loading: Loading,
  delay: 200
})

/* const getResetPassword = Loadable({ */
/*   loader: () => */
/*     import(/1* webpackChunkName: 'reset-password' *1/ "./layouts/reset-password.js"), */
/*   loading: Loading, */
/*   delay: 200 */
/* }) */

export const routes = [
  {
    component: getAbout,
    exact: true,
    path: "/about"
  },
  {
    component: getAnnouncement,
    path: "/a"
  },
  {
    exact: true,
    path: "/change-password/:token",
    component: getChangePassword
  },
  {
    /* exact: true, */
    path: "/confirm-email/:token",
    component: getConfirmEmail
  },
  {
    component: getContact,
    exact: true,
    path: "/contact"
  },
  {
    component: requireAuth(getCourseUpdate),
    exact: true,
    path: "/course/:id",
    routes: [
      {
        component: getCourseSettings,
        path: "/course/course-settings"
      }
    ]
  },
  /* { */
  /* component: requireAuth(getCourseIntroduction), */
  /* path: "/course/course-introduction" */
  /* }, */
  {
    component: getCourses,
    exact: true,
    path: "/courses"
  },
  {
    component: getCourseSettings,
    path: "/course/course-settings"
  },
  {
    component: getPricing,
    exact: true,
    path: "/pricing"
  },
  {
    component: noAuth(getSignup),
    exact: true,
    path: "/signup"
  },
  {
    exact: true,
    path: "/forgot-password",
    component: getForgotPassword
  },
  {
    component: getHome,
    exact: true,
    path: "/"
  },
  {
    component: getLogin,
    exact: true,
    path: "/login"
  }
  /* { */
  /*   path: "/reset-password", */
  /*   component: getResetPassword */
  /* } */
]
