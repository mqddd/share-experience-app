import React from 'react';

import ExperiencDetail from './experience-detail';
import ExperienceCard from './experience-card';
import './experiences.css';

class Experiences extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="experiences-container">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        );
    }
}

export default Experiences;