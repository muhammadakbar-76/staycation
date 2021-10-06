import React, { Fragment, useEffect} from 'react';
import Header from '../../parts/templates/Header';
import Hero from './Hero';
import MostPicked from './MostPicked';
import Categories from '../../parts/templates/Categories';
import Testimony from '../../parts/templates/Testimony';
import Footer from '../../parts/templates/Footer';
import { connect } from 'react-redux';
import {fetchPage} from "../../store/actions/page";
import LoadingScreen from "react-loading-screen";

const LandingPage = (props) => {
    
    const refMostPicked = React.createRef();

    useEffect(() => {
        document.title = "Staycation | Home";
        window.scrollTo(0, 0);

        if (!props.page.landingPage) {
            props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/landing-page`, "landingPage");
        }

     },[]);

     const {page} = props;

     if (!page.hasOwnProperty("landingPage")) {
         return(
            <LoadingScreen
            loading={true}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            logoSrc='images/icons/pin.svg'
            text='Here an introduction sentence (Optional)'
          >
              it will appear in a while
          </LoadingScreen> 
         );
     }

    return(
        <Fragment>
        <Header {...props}></Header>
        <Hero refMostPicked={refMostPicked} data={page.landingPage.hero} />
        <MostPicked refMostPicked={refMostPicked} data={page.landingPage.mostpicked} />
        <Categories data={page.landingPage.category}/>
        <Testimony data={page.landingPage.testimonial}/>
        <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps,{fetchPage})(LandingPage);