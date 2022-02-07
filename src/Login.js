function Login(){
    function login(){
        alert("you are logged in")
    }
    
    return(

        <div className="Login">
            <h1>Login page</h1>
            <input type="email" name="email" placeholder="Enter your Email"/><br/>
            <input type="password" name="password" placeholder="Enter your Password"/><br/>
            <button onClick={login}>Login</button>
        </div>
    )
}
export default Login