// 用于存储存函数

const counter=(state=0,action={})=>{
  switch(action.type){
    case 'INCREMENT':
      return state+1;
    case 'DECREASE':
      return state-1;
    default:return state;
  }
}

export default counter;