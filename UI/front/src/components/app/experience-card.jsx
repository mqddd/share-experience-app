import React from 'react';
import { Link } from 'react-router-dom';


import './experience-card.css';
import avatar from '../../avatar.svg';

class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience-card">
                <Link to="/index/experience-detail" className="react-link"> 
                        <div className="experience-card-header">
                            <img className="experience-card-avatar" src={avatar} alt="avatar" />
                            <div className="experience-card-header-right">
                                <h2 className="experience-card-username">Meqdad</h2>
                                <h5 className="experience-card-time">
                                    2021-5-2 
                                </h5>
                            </div>
                        </div>
                        <div className="experience-card-content">
                            <p className="experience-card-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                        </div>
                </Link>
            </div>
        );
    }
}

export default ExperienceCard;