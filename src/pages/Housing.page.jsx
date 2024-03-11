import React from 'react'
import HousingCard from '../components/HousingCard.component'
import data from '../data/logements.json'
import Collapse from '../components/Collapse.component'
import Tag from '../components/Tag.component'
import Rectangle from '../assets/Rectangle.png'

const Housing = () => {
    return (
        <div>
            <img src={Rectangle} alt="une image" />
            <i class="fa-solid fa-angle-left"></i>
            <i class="fa-solid fa-angle-right"></i>

            <div>
                <h1>
                    Paris center, on the romantic Canal Saint-Martin
                </h1>
                <h2>Paris, île-de-France</h2>

            </div>

            <div>
                <Tag />
                <Tag />
                <Tag />
            </div>

            <div>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <p>Alexandre Dumas</p>
                <div>

                </div>
            </div>

            <div>
                <Collapse />
                <Collapse/>
            </div>
        </div>
    )
}

export default Housing