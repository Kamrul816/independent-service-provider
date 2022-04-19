import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css'

function Signup() {

    /* Email And Password Sing Up */

    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');
    

    const navigate = useNavigate();


    const handleEmail = e =>{
        setEmail(e.target.value);
    }

    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});


      if(user){
          navigate('/');
      }

      const handleForm = e => {
            e.preventDefault();
            createUserWithEmailAndPassword(email,password)
      }

      /* Google Sign Up */

      const [signInWithGoogle, guser, gLoading, gError] = useSignInWithGoogle(auth);

      const handleGoogleSignUp = () =>{
        signInWithGoogle();
      }


  return (
    <>
       <div className="container">
            <div className='d-flex mt-5 mb-5 justify-content-center'>
                <i className="fa-solid fa-user display-1 fw-bolder text-primary"></i>
            </div>
            <h1 className='fw-bolder text-center mb-5'>Sign Up</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form onSubmit={handleForm}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={handlePassword} className="form-control" id="exampleInputPassword1" required/>
                        </div>
                        {loading && <p>Loading...</p>}
                        {error?  <p className='text-danger mt-3 mb-3'>{error.message}</p> : ''}
                        {gError?  <p className='text-danger mt-3 mb-3'>{gError.message}</p> : ''}
                        <div>
                            <p>Already Have An Account ? <Link className='text-primary create-account' to='/login'>Login</Link></p>
                        </div>
                        <div className='d-grid'>
                            <input type="submit" className="btn btn-primary" value='Sign Up' />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-5">
               <div className="login-option mt-5 mb-5 ">
                   <p className='text-center lead'>OR</p>
               </div>
               <div className='d-grid justify-content-center'>
                   <button className='btn btn-lg btn-info text-white' onClick={handleGoogleSignUp}><img src="./img/google.png" className='google-icon me-2' alt="" /> Sign Up With Google</button>
               </div>
            </div>
         </div>
    </>
  );
}

export default Signup;
