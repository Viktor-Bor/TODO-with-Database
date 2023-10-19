import React from 'react'
import ReactDOM from 'react-dom';


export function Form({ Login, Registration, RegistrationSucceed, activeRegistratoinSucceed, setActiveRegistratoinSucceed,activeRegistration, setActiveRegistration, activeLogIn, setActiveLogIn }){


return ReactDOM.createPortal(

    <div className={activeRegistration || activeLogIn || activeRegistratoinSucceed ? "layout-form active" : "layout-form"}>

    <Registration 
    activeRegistration={activeRegistration} 
    setActiveRegistration={setActiveRegistration}
    activeLogIn={activeLogIn}
    setActiveLogIn={setActiveLogIn}
    setActiveRegistratoinSucceed={setActiveRegistratoinSucceed}
    />

    <RegistrationSucceed 
    activeRegistratoinSucceed={activeRegistratoinSucceed}
    setActiveRegistration={setActiveRegistration}
    setActiveLogIn={setActiveLogIn}
    setActiveRegistratoinSucceed={setActiveRegistratoinSucceed}
    />

    <Login 
    activeRegistration={activeRegistration} 
    setActiveRegistration={setActiveRegistration}
    activeLogIn={activeLogIn}
    setActiveLogIn={setActiveLogIn}
    />
</div>,
    document.getElementById('portal')
    )
}