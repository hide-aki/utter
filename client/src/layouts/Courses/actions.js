import {
  ADD_LEVEL,
  FETCHED_COURSE_NAME,
  REQUESTED_COURSE_NAME_SUCCEEDED,
  REQUESTED_COURSE_NAME_FAIL,
  COURSE_LANGUAGE,
  SAVE_FORM_TO_REDUX,
  // CRUD
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAIL,
  UDPATE_COURSE,
  UDPATE_COURSE_SUCCESS,
  UDPATE_COURSE_FAIL
} from './types.js'

const addLevel = level => {
  return {type: 'ADD_LEVEL', level}
}

// CREATE
const createCourseRequest = course => {
  return {type: 'CREATE_COURSE_REQUEST', course}
}

const createCourseSuccess = data => {
  return {type: 'CREATE_COURSE_SUCCESS', data: data.msg}
}

const createCourseFail = error => {
  return {type: 'CREATE_COURSE_FAIL', error}
}

// UPDATE
const updateCourse = course => {
  return {type: 'UPDATE_COURSE', course}
}

const updateCourseSuccess = data => {
  return {type: 'UPDATE_COURSE_SUCCESS', data: data.msg}
}

const updateCourseFail = error => {
  return {type: 'UPDATE_COURSE_FAIL', error}
}

const chooseCourseLanguage = courseLanguage => {
  return {
    type: COURSE_LANGUAGE,
    payload: new Promise((resolve, reject) => {
      resolve(courseLanguage)
    })
  }
}

const fetchCourseName = course => {
  return {type: 'FETCHED_COURSE_NAME', course}
}

const requestCourseNameSuccess = data => {
  return {type: 'REQUESTED_COURSE_NAME_SUCCEEDED', data: data.msg}
}

const requestCourseNameError = error => {
  return {type: 'REQUESTED_COURSE_NAME_FAIL', error}
}

const saveFormToRedux = course => {
  return {type: 'SAVE_FORM_TO_REDUX', course}
}

export {
  addLevel,
  createCourseRequest,
  createCourseSuccess,
  createCourseFail,
  updateCourse,
  updateCourseSuccess,
  updateCourseFail,
  chooseCourseLanguage,
  fetchCourseName,
  requestCourseNameError,
  requestCourseNameSuccess,
  saveFormToRedux
}
