import React from 'react'
import HousingCard from '../components/HousingCard.component'
import Collapse from '../components/Collapse.component'
import Tag from '../components/Tag.component'
import Rectangle from '../assets/Rectangle.png'

const Housing = () => {
    return (
        <div className='main'>
            <div className='main__hero__container'>
                <img src={Rectangle} alt="une image" />
                <div className='main__hero__container__arrows'>
                    <i class="fa-solid fa-angle-left"></i>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <div className='main__city__container'>
                <h1 className='main__city__container__title1'>
                    Paris center, on the romantic Canal Saint-Martin
                </h1>
                <h2 className='main__city__container__title2'>Paris, île-de-France</h2>

            </div>

            <div className='main__tag__container'>
                <Tag />
                <Tag />
                <Tag />
            </div>

            <div className='main__stars__container'>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <p>Alexandre Dumas</p>
                <div className='main__circle'>

                </div>
            </div>

            <div className='main__collapse'>
                <Collapse/>
                <Collapse/>
            </div>
        </div>
    )
}

export default Housing