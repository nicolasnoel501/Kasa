import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home.page';

const NotFound = () => {
    return (
        <div className='not-found__container'>
            <h1 className='not-found__container__title'>404</h1>
            <p className='not-found__container__text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='not-found__container__link'>Retourner à l'accueil</Link>
        </div>
    );
};

export default NotFound;
