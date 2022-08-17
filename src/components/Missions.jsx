import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missionsCard = missions.map((mission) => {
      const { name, year, country, destination } = mission;
      return (
        <MissionCard
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
          key={ name }
        />
      );
    });

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="cardMission">{missionsCard}</div>
      </div>
    );
  }
}

export default Missions;
