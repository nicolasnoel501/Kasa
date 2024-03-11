import React from 'react'

const Hero = (props) => {
    const { image, children } = props;
    
    return (
        <header className={`home__header ${!children && "hero__about"}` } style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}>
            {
                !children ? null :
                    <h3 className='home__header-title'>{children}</h3>
            }
        </header>
    )
}

export default Hero