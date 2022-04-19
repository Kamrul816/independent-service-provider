import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    /* Email Log In */

    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');


    const handleEmail = e =>{
        setEmail(e.target.value);
    }

    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      const handleForm = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
      }

      /* Google Sign In */

      const [signInWithGoogle,guser, gLoading, gError] = useSignInWithGoogle(auth);

      const handleGoogleSignIn = () =>{
        signInWithGoogle();
      }

      /* forgot password */

      const [sendPasswordResetEmail, fSending, fError] = useSendPasswordResetEmail(auth);

      const handleForgotPassword = () =>{
        
        sendPasswordResetEmail(email);

        if(!fError){
            toast('Email Send')
        }
      }

      /* protected route */

      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || "/";

      if(user){
          navigate(from,{replace:true});
      }
      
      if(guser){
          navigate(from,{replace:true});
      }
    
  return (
    <>
        {/* Sign In With email And password */}

         <div className="container">
            <div className='d-flex mt-5 mb-5 justify-content-center'>
                <i className="fa-solid fa-user display-1 fw-bolder text-primary"></i>
            </div>
            <h1 className='fw-bolder text-center mb-5'>Login</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form onSubmit={(e)=>handleForm(e)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={(e)=>handleEmail(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={(e)=>handlePassword(e)} className="form-control" id="exampleInputPassword1" required/>
                        </div>
                        {loading && <p>Loading...</p>}
                        {error?  <p className='text-danger mt-3 mb-3'>{error.message}</p> : ''}
                        {gError?  <p className='text-danger mt-3 mb-3'>{gError.message}</p> : ''}
                        <div>
                            <p>Don't Have An Account ? <Link className='text-primary create-account' to='/signup'>Create One</Link></p>
                            <p className='create-account text-primary' onClick={handleForgotPassword}>Forgotten password?</p>
                        </div>
                        <div className='d-grid'>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Sign In With Google */}

            <div className="row mt-5">
               <div className="login-option mt-5 mb-5 ">
                   <p className='text-center lead'>OR</p>
               </div>
               <div className='d-grid justify-content-center'>
                   <button className='btn btn-lg btn-info text-white' onClick={handleGoogleSignIn}><img src="./img/google.png" className='google-icon me-2' alt="" /> Log In With Google</button>
               </div>
            </div>
         </div>

         <ToastContainer />
    </>
  );
}

export default Login;
