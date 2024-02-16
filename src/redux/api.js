import axios from "axios"
import { connectionFailure, connectionStart, connectionSuccess } from "./userReducer"

export const fetching=async(dispatch,user)=>{
    dispatch(connectionStart());
    try {
        const res=await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/auth/login`,user)
        dispatch(connectionSuccess(res.data)) 
    } catch (error) {
        dispatch(connectionFailure()) 
    }
}
