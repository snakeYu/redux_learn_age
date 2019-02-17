// 用于合并不同的reducer

import { combineReducers} from 'redux';

import counter from './counter'
import user from './user'


// 混合所有的reducer   combine 翻译： 结合
const rootReducer=combineReducers({
  counter,user
})

export default rootReducer