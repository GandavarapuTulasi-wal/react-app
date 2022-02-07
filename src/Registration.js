function Registration(){
    return(
        <div>
            <h1>Registration Form</h1>
            <form>
                <input type="text" name="firstname" placeholder="Enter your firstname" /><br/>
                <input type="text" name="lastname" placeholder="Enter your Lastname" /><br/>
                <input type="email" name="email" placeholder="Enter your email" /><br/>
                <input type="text" name="username" placeholder="Enter your username" /><br/>
                <input type="number" name="age" placeholder="Enter your age" /><br/>
                <button>Register</button>
            </form>
        </div>
    )
}
export default Registration