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
                            <Link to="/" className="navbar-brand"> PANDSHIPDV 
                            <img src="pdv_imagens/PandshiPDV.png" alt="Logo Inicial do projeto" width="70px" height="70px"/>
                            </Link>
                        </div>
                    </nav>
            </header>
            <main>
                <div className='conatiner mt-3'>
                    {children}
                </div>
            
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={true}
                    theme="colored"
                />
            </main>
        </div>
    );
}

export default LayoutPrincipal;
