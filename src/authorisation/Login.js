import React from 'react';

export function Login({setActiveRegistration, activeLogIn, setActiveLogIn}){

    function openLoginForm(){
        setActiveLogIn(false)
        setActiveRegistration(true)   
    }

return (
        <div className={activeLogIn ? "login-form active" : "login-form"} onClick={e => e.stopPropagation()}>

      <h1>Log in</h1>
        <form>

            <div className="form-control">
            <input type="email" placeholder="Email" required />
            </div>
            <div className="form-control">
            <input type="password" placeholder="Password" required />
            </div>
            <button className="btn">Log IN</button>
            <p className="text">Haven't an account <span onClick={() => openLoginForm()}>Registration</span></p>

        </form>
     </div>
    )
  }





      // return ReactDOM.createPortal(
    //     <div className={activeLogIn ? "layout-form active" : "layout-form"} onClick={() => closeForm()}>

    // ...

       // ,  
     // document.getElementById('portal')