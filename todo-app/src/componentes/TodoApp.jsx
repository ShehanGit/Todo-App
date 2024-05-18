import { useState } from 'react'
import '../CSS/Todo.css'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <h1>Todo management application</h1>
            <LoginComponent />
            {/* <WellcomeComponent /> */}
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] =useState ('in26Minits')
    const [passward, setPassward] =useState ('')


    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswardChange(event){
        setPassward(event.target.value)
        console.log(event.target.value)
    }
       

    return(
        <div  className="Login">
            <div className="loginForm">
                <div>
                    <label>User name :</label>
                    <input type ="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>

                <div>
                    <label>Passward :</label>
                    <input type ="password" name="passward" value={passward} onChange={handlePasswardChange}/>
                </div>
                <div>
                    <button type="button" name="login"> Login </button>
                </div>
            </div>
            
        </div>
    )
}
function WellcomeComponent(){
    return(
        <div  className="Login">
            <h1>Welcome Component</h1>
        </div>
    )
}