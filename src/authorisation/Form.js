import React from 'react'
import ReactDOM from 'react-dom';

export function Form({ Login, Registration, activeRegistration, setActiveRegistration, activeLogIn, setActiveLogIn }){

    function closeForm(){
        setActiveRegistration(false)
        setActiveLogIn(false)
      }

return ReactDOM.createPortal(

    <div className={activeRegistration || activeLogIn? "layout-form active" : "layout-form"} onClick={() => closeForm()}>

    <Registration 
    activeRegistration={activeRegistration} 
    setActiveRegistration={setActiveRegistration}
    activeLogIn={activeLogIn}
    setActiveLogIn={setActiveLogIn}
    closeForm={closeForm} />
    <Login 
    activeRegistration={activeRegistration} 
    setActiveRegistration={setActiveRegistration}
    activeLogIn={activeLogIn}
    setActiveLogIn={setActiveLogIn}
    closeForm={closeForm}/>
</div>,
    document.getElementById('portal')
    )
}