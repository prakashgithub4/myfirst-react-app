import { Redirect } from "react-router-dom";

export default function logout(){
    localStorage.removeItem('user');
    return <Redirect to={'/'} />
}