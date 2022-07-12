import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <PlanetCard planetName={ planets[0].name } planetImage={ planets[0].image } />
        <PlanetCard planetName={ planets[1].name } planetImage={ planets[1].image } />
        <PlanetCard planetName={ planets[2].name } planetImage={ planets[2].image } />
        <PlanetCard planetName={ planets[3].name } planetImage={ planets[3].image } />
        <PlanetCard planetName={ planets[4].name } planetImage={ planets[4].image } />
        <PlanetCard planetName={ planets[5].name } planetImage={ planets[5].image } />
        <PlanetCard planetName={ planets[6].name } planetImage={ planets[6].image } />
        <PlanetCard planetName={ planets[7].name } planetImage={ planets[7].image } />
      </>
    );
  }
}

export default SolarSystem;
