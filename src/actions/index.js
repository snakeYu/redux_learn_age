// 用于存储动作

import {INCREMENT,DECREASE} from '../constants'
// import * as type from '../constants'

export const increment=()=>{
  return {
    type:INCREMENT
    // type:type.INCREMENT
  }
}

export const decrease=()=>{
  return {
    type:DECREASE
  }
}