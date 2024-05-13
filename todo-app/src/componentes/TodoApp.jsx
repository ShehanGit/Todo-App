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
    return(
        <div  className="Login">
            <h1>Login Component</h1>
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