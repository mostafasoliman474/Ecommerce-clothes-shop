import axios from "axios"
import { connectionFailure, connectionStart, connectionSuccess } from "./userReducer"

export const fetching=async(dispatch,user)=>{
    dispatch(connectionStart());
    try {
        const res=await axios.post("http://localhost:5000/api/auth/login",user)
        dispatch(connectionSuccess(res.data)) 
    } catch (error) {
        dispatch(connectionFailure()) 
    }
}
