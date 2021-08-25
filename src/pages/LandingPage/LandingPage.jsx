import React, { Fragment } from 'react';
import Header from '../../parts/templates/Header';
import landingPage from '../../json/landingPage.json';
import Hero from './Hero';
import MostPicked from './MostPicked';
import Categories from '../../parts/templates/Categories';
import Testimony from '../../parts/templates/Testimony';
import Footer from '../../parts/templates/Footer';

const LandingPage = (props) => {

    const refMostPicked = React.createRef()

    return(
        <Fragment>
        <Header {...props}></Header>
        <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories}/>
        <Testimony data={landingPage.testimonial}/>
        <Footer />
        </Fragment>
    )
}

export default LandingPage;