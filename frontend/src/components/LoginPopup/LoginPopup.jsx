import React, {useContext, useEffect, useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

    const{url, setToken} = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("Login")
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"" 
    })
    // take the data from the input and save it in the state variable
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }
    // useEffect(()=>{ // to check
    //     console.log(data)
    // },[data]) //the function gets executed whenever this data is changed

    const onLogin = async(event)=>{
        event.preventDefault()
        // console.log("Login/Register form submitted");
        let newUrl = url;
        if(currentState ==="Login"){
            newUrl+="/api/user/login"
        }else{
            newUrl+="/api/user/register"
        }
        const response = await axios.post(newUrl,data)
        console.log(response)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }
    }  

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currentState === "Login"?<></>:
                <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your password' required />
            </div>
            <button type='submit'>{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                {currentState === "Login"?"":
                <>
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
                </>
                }
            </div> 

            {currentState === "Login"
                ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup