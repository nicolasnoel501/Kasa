import React from 'react'
import LandscapeWaterImage from '../assets/landscape-water.jfif'
import HousingCard from '../components/HousingCard.component'
import Hero from '../components/Hero.component'

const Home = (props) => {
    const { data } = props;

    return (
        <main className='main__content home'>
            <Hero image={LandscapeWaterImage}>
                Chez vous, <span>partout et ailleurs</span>
            </Hero>

            <div className='housing-card__container'>
                {data.map((housing, index) => {
                    return <HousingCard key={index} housing={housing} />
                })}
            </div>

        </main>
    )
}

export default Home