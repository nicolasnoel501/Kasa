import React from 'react'
import LandscapeImage from '../assets/landscape.jfif';
import Hero from '../components/Hero.component';
import Collapse from '../components/Collapse.component';

const About = () => {
  return (
    <main className='main__content home'>
      <Hero image={LandscapeImage}></Hero>
      <div className="collapses__container">
         
        
        
        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérfiées par nos équipes"/>
        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa.
         Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme"/>
        <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa.
         Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme"/>
        <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. 
        Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permets à nos équipes de vérifier que les standards sont bien respéctés. 
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
    </main>
  )
}

export default About