import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetCard = planets.map((planet) => {
      const { name, image } = planet;
      return <PlanetCard planetName={ name } planetImage={ image } key={ name } />;
    });

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="cardPlanet">{planetCard}</div>
      </div>
    );
  }
}

export default SolarSystem;
