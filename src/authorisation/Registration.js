import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

export function Registration({activeRegistration, setActiveRegistration, setActiveLogIn, setActiveRegistratoinSucceed}){

const [registerEmail, setRegisterEmail] = useState('')
const [registerPassword, setRegisterPassword] = useState('')


const register = async (e) => {
    e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            // CLEAR INPUTS! to fix!
            setRegisterEmail('')
            setRegisterPassword('')
            registrationSucceedMessage()
            // console.log(user)
        }

        catch (error) {
            console.log(error)
        }
    }


    function openRegistrationForm(){
        setActiveRegistration(false)
        setActiveLogIn(true)
    }

    function registrationSucceedMessage() {
        setActiveRegistration(false)
        setActiveLogIn(false)
        setActiveRegistratoinSucceed(true)
        }


return (
    <div className={activeRegistration ? "registration-form active" : "registration-form"} onClick={e => e.stopPropagation()}>
      <h1>Registration</h1>
        <form>
            <div className="form-control">
                <input type="email" placeholder="Email" required onChange={(e) => setRegisterEmail(e.target.value)}/>
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" required on onChange={(e) => setRegisterPassword(e.target.value)}/>
            </div>
            {/* <div className="form-control">
                <input type="password" placeholder="Confirm password" required />
            </div> */}
            <button className="btn" type='submit' onClick={register} >Registration</button>
            <p className="text">Have an account? <span onClick={() => openRegistrationForm()}>Log in</span></p>
            </form>
         </div>
        )
     }

  //     return ReactDOM.createPortal(
//  <div className={activeRegistration ? "layout-form active" : "layout-form"} onClick={() => closeForm()}>

        // ...

        // </div>
        // ,
        // document.getElementById('portal')

