import {createReducer} from '../utils/reducerUtils'

import orm from './schema'
const defaultEditingEntities = orm.getEmptyState()

export default createReducer(defaultEditingEntities, {})
