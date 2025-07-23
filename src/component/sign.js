import './loging.css';

function Sign() {
  return (
    <div className="log-body">
                    <img src={require('./flag.jpg')} alt="Logo" className='logo'  />

            <div className='login-container'>
                    <div className='login'>
                        {/* <nav><img src={require('../qfs.png')} /></nav> */}
                        <h1>Sign In to Get Started</h1>
                        <span>Your ease of mind is our priority</span> <br/>
                        <p>Please provide your login details and click on the login button to proceed</p>
                        
                        <form>
                            <div className='login-form'>
                                <label htmlFor="name">Enter Full Name</label> <br />
                                <input type="text" id="email" name="name" required placeholder='Full Name' />
                            </div>
                            <div className='login-form pass'>
                                <label htmlFor="email">Enter Username</label> <br />
                                <input type="password" id="password" name="password" required placeholder='Password' />
                            </div>
                        </form>
                        <form>
                            <div className='login-form'>
                                <label htmlFor="email">Enter Email</label> <br />
                                <input type="text" id="email" name="email" required placeholder='Email' />
                            </div>
                            <div className='login-form pass'>
                                <label htmlFor="tele">Enter Phone</label> <br />
                                <input type="number" id="password" name="phone" required placeholder=' 1234567890 ' />
                            </div>
                        </form>
                         <form>
                            <div className='login-form'>
                                <label htmlFor="password">Password</label> <br />
                                <input type="password" id="password" name="password" required placeholder='Email' />
                            </div>
                            <div className='login-form pass'>
                                <label htmlFor="email">Confirm Password</label> <br />
                                <input type="password" id="password" name="password" required placeholder='Password' />
                            </div>
                        </form>
                        <button type="submit" className='butto'>Create Account</button> <br />

                        <div className="l">
                            <span className='or'> <hr className='li' /> Or <hr className='link'/> </span>
                        </div>

                        <div className='other'>
                            <button className='but'>Login</button>
                            <button className='butt'>Reset Your Password</button>
                        </div>
                    </div>
            </div>

        </div>
  );
}
export default Sign;
