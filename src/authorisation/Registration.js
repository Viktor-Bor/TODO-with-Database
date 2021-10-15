import React from 'react'

export function Registration({activeRegistration, setActiveRegistration, setActiveLogIn}){

    function openRegistrationForm(){
        setActiveRegistration(false)
        setActiveLogIn(true)
    }

return (
    <div className={activeRegistration ? "registration-form active" : "registration-form"} onClick={e => e.stopPropagation()}>

      <h1>Registration</h1>
        <form>

            <div className="form-control">
                <input type="email" placeholder="Email" required />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" required />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Confirm password" required />
            </div>
            <button className="btn">Registration</button>
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

