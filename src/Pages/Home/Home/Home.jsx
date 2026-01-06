import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../HowItWorks';
import OurServices from '../OurServices';
import SelesTeam from '../SalesTeam'
import Reviwes from '../Reviwes/Reviwes';

const reviewPromise = fetch('/reviews.json').then(res =>res.json())
const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <HowItWorks></HowItWorks>
         <OurServices></OurServices>
         <SelesTeam></SelesTeam>
         <Reviwes reviewPromise={reviewPromise}></Reviwes>
        </div>
    );
};

export default Home;