import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import NotFound from './NotFound.page';
import SlideShow from '../components/SlideShow.component';
import Tag from '../components/Tag.component';
import Rating from '../components/Rating.component';
import Collapse from '../components/Collapse.component';

const findHousing = (id) => {
    return logements.find(housing => housing.id === id);
}

const Housing = () => {
    const { id } = useParams();
    const [imageSlider, setImageSlider] = useState([]);
    const housing = findHousing(id);

    useEffect(() => {
        if (housing) {
            setImageSlider(housing.pictures);
        }
    }, [housing]);

    if (!housing) {
        return <NotFound />;
    }

    const hostFullName = housing.host.name;
    const [firstName, lastName] = hostFullName.split(' ');

    return (
        <div className='main'>
            <div className='main__hero__container'>
                <SlideShow pictures={imageSlider} />
            </div>
            <div className='main__city__container'>
                <h1 className='main__city__container__title1'>
                    {housing.title}
                </h1>
                <h2 className='main__city__container__title2'>{housing.location}</h2>
            </div>
            
            <div className='main__tag__container'>
                {housing.tags.map((tag, index) =>
                    <Tag key={index} title={tag} />
                )}
            </div>
            <div>
            <div className='main__stars__container'>
                <div className='main__stars__container__host'>
                    <div className='main__stars__container__host__text'>
                        <p className='first-name'>{firstName}</p> <p className='last-name'>{lastName}</p>
                    </div>
                    <img className='main__stars__container__host__img' src={housing.host.picture} alt="" />
                </div>
                <Rating rating={housing.rating} />
            </div>
        </div>
            <div className='main__collapse'>
                <Collapse title="Description" content={{ type: 'paragraph', text: housing.description }} />
                <Collapse title="Équipements" content={{ type: 'list', items: housing.equipments }} />
            </div>
        </div>
    );
}

export default Housing;
