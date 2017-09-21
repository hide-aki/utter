// MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE

const LOAD = 'utter/rooms/LOAD'
const LOAD_FULFILLED = 'utter/rooms/LOAD_FULFILLED'
const CREATE = 'utter/rooms/CREATE'
const UPDATE_ROOM_LEVEL = 'utter/rooms/UPDATE_ROOM_LEVEL'
const UPDATE_ROOM_LEVEL_FULFILLED = 'utter/rooms/UPDATE_ROOM_LEVEL_FULFILLED'
const DELETE = 'utter/rooms/DELETE'
const ROOM_SELECT = 'utter/rooms/ROOM_SELECT'
const ROOM_SELECT_FULFILLED = 'utter/rooms/ROOM_SELECT_FULFILLED'

export {
  LOAD,
  LOAD_FULFILLED,
  CREATE,
  UPDATE_ROOM_LEVEL,
  UPDATE_ROOM_LEVEL_FULFILLED,
  DELETE,
  ROOM_SELECT,
  ROOM_SELECT_FULFILLED
}
