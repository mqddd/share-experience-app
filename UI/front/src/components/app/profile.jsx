import React from 'react';

import ExperienceCard from './experience-card';
import './profile.css';
import avatar from '../../avatar.svg';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div className="profile-container">
                <ProfileHeader />
                <div className="profile-content">
                    <ProfileContent />
                </div>
            </div>
        );
    }
}

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="profile-header">
                <div className="profile-avatar">
                    <img className="profile-avatar-image" src={avatar} alt="avatar" />
                    <button className="profile-change-avatar">
                        Change your avatar
                    </button>
                </div>
                <div className="profile-header-right">
                    <h2 className="profile-username">Hello, Meqdad</h2>
                    <p className="profile-bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
        );
    }
}

class ProfileContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: false
        }
    }

    setFavoritesExperienceState = () => {
        this.setState({
            favorites: true
        })
    }

    setMyExperienceState = () => {
        this.setState({
            favorites: false
        })
    }

    render() {
        const { favorites } = this.state;

        return (
            <div className="profile-content-container">
                <div className="profile-content-header">
                    <button className="profile-content-mine" onClick={this.setMyExperienceState}>
                        My Experiences
                    </button>
                    <button className="profile-content-favorites" onClick={this.setFavoritesExperienceState}>
                        Favorite Experiences
                    </button>
                </div>
                <div className="profile-content-main">
                    {favorites ? 
                    <div>
                        <h5 className="profile-content-warning">you have not liked any experiences!</h5>
                    </div> : <div>
                        <ExperienceCard />
                        <ExperienceCard />
                        <ExperienceCard />
                        <ExperienceCard />
                        <ExperienceCard />
                    </div>
                    }
                </div>
            </div>
        ); 
    }
}



export default Profile;