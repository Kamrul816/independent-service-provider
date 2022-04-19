import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

function Navbar() {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top pt-3 pb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-0 ms-md-5" to="/">DOCTOR POUL</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-md-5 me-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/book">Book-Now</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                            </li>
                        </ul>
                        <div className="d-flex mt-md-0 mt-5 me-md-3 me-0">
                            {user ? <button className="btn btn-outline-light" onClick={() => handleSignout()}>Sign Out</button> : <Link className="btn btn-outline-light" to='/login'>Log In</Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
