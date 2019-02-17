const user=(state='rail',action={})=>{
  switch(action.type){
    case "add":
      return action.val;
 

    default:return state;
  }
}

export default user;