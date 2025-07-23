import './loging.css';
import myBackgroundImage from './flag.jpg';
function Login() {
     const handlesign = () => {
        window.location.href = './sign'; 
    }
    return (

        <div className="log-body"
        
        style={{ 
        backgroundImage: `url(${myBackgroundImage})`, 
        backgroundSize: 'cover', // Optional: Adjust image sizing
        backgroundPosition: 'center', // Optional: Adjust image position
        backgroundRepeat: 'no-repeat', // Optional: Prevent image repetition
        width: '100%',
      }}>

            <div className='login-container'>
                    <div className='login'>
                        {/* <nav><img src={require('../qfs.png')} /></nav> */}
                        <h1>Login to Get Started</h1>
                        <span>Your ease of mind is our priority</span> <br/>
                        <p>Please provide your login details and click on the login button to proceed</p>
                        
                        <form>
                            <div className='login-form'>
                                <label htmlFor="email">Email</label> <br />
                                <input type="text" id="email" name="email" required placeholder='Email' />
                            </div>
                            <div className='login-form pass'>
                                <label htmlFor="email">Password</label> <br />
                                <input type="password" id="password" name="password" required placeholder='Password' />
                            </div>
                        </form>
                        <button type="submit" className='butto'>Login</button> <br />

                        <div className="l">
                            <span className='or'> <hr className='li' /> Or <hr className='link'/> </span>
                        </div>

                        <div className='other'>
                            <button className='but' onClick={handlesign}>Create Account</button>
                            <button className='butt'>Reset Your Password</button>
                        </div>
                    </div>
            </div>

        </div>
    ); 
};
export default Login;