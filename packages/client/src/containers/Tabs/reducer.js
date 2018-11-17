import {createReducer} from '../../utils/reduxUtils.js'

import {TAB_SELECTED} from './types.js'

const initialState = {
  currentTab: ''
}

export function selectTab(state, payload) {
  return {
    currentTab: payload.tabName
  }
}

export default createReducer(initialState, {
  [TAB_SELECTED]: selectTab
})