import {push} from 'react-router-redux'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {fetchData} from '../../../utils/apiMgr'

// actions
import * as types from '../types'

export function* fetchTeachingCourse(state) {
  const {courseAuthorId, courseId, courseName} = state
  const url = `api/courses/teaching-course/${courseAuthorId}/${courseId}/${courseName}`
  const htmlReadyUrl = encodeURI(url)
  try {
    const {identifier = '', password = ''} = state
    const url = htmlReadyUrl
    const method = 'get'
    const data = {identifier, password}
    const cb = null
    const params = null

    /**
     * @param {string} url ex.'/teaching-course/:courseAuthorId/:courseId/:courseName'
     */
    const res = yield call(fetchData, {url, method, data, params, cb})

    if (res.status >= 200 && res.status < 300) {
      yield put({
        type: types.COURSE_ASYNC.SUCCESS,
        payload: res.data
      })

      yield put(push(`/my-courses/${courseId}/${courseName}/edit`))
    } else {
      throw res
    }
  } catch (error) {
    if (!error.response) {
      yield put({
        type: types.COURSE_ASYNC.ERROR,
        payload: error.message || 'Something went wrong.'
      })
    } else {
      console.log('error: ', error.response.statusText)
      const err = error.response.statusText
      yield put({
        type: types.COURSE_ASYNC.ERROR,
        payload: err
      })
    }
  } finally {
  }
}

export function* updateTeachingCourse(state) {
  const {courseAuthorId, courseId, courseName} = state
  const url = `api/courses/teaching-course/${courseAuthorId}/${courseId}/${courseName}`
  const htmlReadyUrl = encodeURI(url)
  try {
    const {identifier = '', password = ''} = state
    const url = htmlReadyUrl
    const method = 'get'
    const data = {identifier, password}
    const cb = null
    const params = null

    /**
     * @param {string} url ex.'/teaching-course/:courseAuthorId/:courseId/:courseName'
     */
    const res = yield call(fetchData, {url, method, data, params, cb})

    if (res.status >= 200 && res.status < 300) {
      yield put({
        type: types.COURSE_ASYNC.SUCCESS,
        payload: res.data
      })

      yield put(push(`/my-courses/${courseId}/${courseName}/edit`))
    } else {
      throw res
    }
  } catch (error) {
    if (!error.response) {
      yield put({
        type: types.COURSE_ASYNC.ERROR,
        payload: error.message || 'Something went wrong.'
      })
    } else {
      console.log('error: ', error.response.statusText)
      const err = error.response.statusText
      yield put({
        type: types.COURSE_ASYNC.ERROR,
        payload: err
      })
    }
  } finally {
  }
}

function* watchCourse() {
  yield all([
    takeLatest(types.COURSE_ASYNC.REQUEST, fetchTeachingCourse),
    takeLatest(types.COURSE_ASYNC.UPDATE, updateTeachingCourse)
  ])
}

// function* updateCourse() {
//   yield all([types.COURSE_ASYNC.UPDATE, updateTeachingCourse])
// }

export default [watchCourse]
