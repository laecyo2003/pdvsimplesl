import React from 'react';
import {Link} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LayoutPrincipal = ({children}) => {
    return (
        <div>
            <header>
                {/* Barra de navegação como um link */}
                    <nav className="navbar navbar-light barra-navegacao">
                        <div className="container">
                            <Link to="/" className="navbar-brand"> Sistema PDV </Link>
                        </div>
                    </nav>
            </header>
            <main>
                <div className='conatiner mt-3'>
                    {children}
                </div>
                <ToastContainer/>
            </main>
        </div>
    );
}

export default LayoutPrincipal;
