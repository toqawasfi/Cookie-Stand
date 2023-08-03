
import { createContext, useContext, useState } from "react"
import jwt from 'jsonwebtoken'


//global

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl+"api/token/";

const AuthContext = createContext();


export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) {
      console.error("Error: auth is null");
      return 0
      // Handle the error case appropriately, e.g., return a default value
    }
    return auth;
  }
  

export function AuthProvider(props){

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    })

    async function login(username, password){
        // const response =  axios.post(url,{username,password})

        const options = {
            method : "POST",
            body: JSON.stringify({username,password}),
            headers : {'Content-Type' : 'application/json'}

        }

        const response = await fetch(tokenUrl,options)

        const data = await response.json()

        console.log("data",data)

        const decodedAccess = jwt.decode(data.access)
        console.log("decoded",decodedAccess)

        const newState = {
            tokens : data,
            user : {
                username : decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            }
        }

        setState(prevState =>({...prevState, ...newState}));


    }

    function logout() {
        const newState = {
            tokens : null,
            user : null,
        }

        setState(prevState =>({...prevState, ...newState}));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}