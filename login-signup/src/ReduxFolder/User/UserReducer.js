// import { googleAuth } from "../../FirebaseFolder/Firebase"


let initial = {
    isLogin : false,
    user : null
}


export const UserReducer = (state=initial,action)=>{
    switch(action.type){
        case "SUCCESS" :
             return {
                ...state,
                isLogin : true,
                user : action.payload
             }
        default : return state    
    }
}