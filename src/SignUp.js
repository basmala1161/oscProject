export default function SignUp(){
return(
    <div className="parent" 
    > 
    
    <div className="register">
        <form>
            <label htmlFor ="name" >Name:</label>
            <input type='text ' id="name" placeholder=" Name...."></input>

                <label htmlFor ="email" >Email:</label>
                  <input type='email' id="email" placeholder=" Email...."></input>

                   <label htmlFor ="password" >Password:</label>
                  <input type='password' id="password" placeholder=" Password..."></input>

                   <label htmlFor ="Rpassword" >Repeat Password:</label>
                  <input type='password' id="Rpassword" placeholder=" Repeat Password...."></input>
                  <div style={{textAlign :'center'}}>
                    <button type="submit">Register</button>
                     </div>
        </form>
    </div>
    </div>
   
)

}
