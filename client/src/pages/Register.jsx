import React from 'react'
import '../styled/Register.scss';
const Register = () => {
  return (
    <>
    <div className="register">
      <div className="register_content">
        <form action="">
          <input 
          placeholder='First Name'
          name='firstname'
          value={FormData.firstname}
          required
          />
          <input 
          placeholder='Last Name'
          name='firstname'
          value={FormData.lastname}
          required
          />
          <input 
          placeholder='Email'
          name='email'
          type='email'
          value={FormData.email}
          required
          />
          <input 
          placeholder='Enter your password'
          name='password'
          type='password'
          value={FormData.password}
          required
          />
           <input 
          placeholder='Confirm password'
          name='confirmpassword'
          type='password'
          value={FormData.password}
          required
          />
          <input 
          id='image'
          type='file'
          name='profileimage'
          accept='image/*'
          style={{display:"none"}}
          required
          />
          <label htmlFor='image'>
            <img src="" alt="" srcset="" />
            <p>
              Upload your image
            </p>
          </label>
          <button>Register</button>
        </form>

        <a href="http://">Already have an account ? Log In Here</a>
      </div>
    </div>
    </>
  )
}

export default Register