import React from 'react'
import './Actualite.css'
import {ToastContainer, toast} from 'react-toastify';

function Actualite() {
    toast.error('la page est Vide');
    return (
        <div className='app_actualite'>
        <ToastContainer />
        <h1>Page vide pour l'instant</h1>
            
        </div>
    )
}

export default Actualite
