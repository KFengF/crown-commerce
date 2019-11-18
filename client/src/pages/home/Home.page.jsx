import React from 'react';
import Directory from './components/directory/Directory.component';
import { HomePageContainer } from './Home.styles';
/* import './HomePage.scss'; */

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;