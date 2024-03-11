import React from 'react'
import { Link } from 'react-router-dom'

const HousingCard = (props) => {
    const { housing } = props;
    const { title, cover, id } = housing;

    if (!title || !cover || !id) {
        return null;
    }

    return (
        <div className='housing-card' style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(10, 10, 10, 0.00) 42%, rgba(4, 4, 4, 0.20) 99.99%, rgba(0, 0, 0, 0.50) 100%), url(${cover})`}}>
            <Link className='housing-card__link' to={`/housing/${id}`}>
                <h3 className='housing-card__title'>
                    {title}
                </h3>
            </Link>
        </div>

    )
}

export default HousingCard