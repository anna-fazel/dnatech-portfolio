import './login.css'

const Login = () => {
   return (
      <div className='login'>
      <form action="">
         <h3 className='form-title'>Sign In</h3>
         <label htmlFor="username">Username*</label>
         <input type="text" id="username" className='input' name='username' required/>
         
         <label htmlFor="pass">Password*</label>
         <input type="password" id="pass" className='input' name='pass' required/>
                  
         <button className='form-button'>Sign In</button>
      </form>
      
   </div>
   )
}

export default Login
