import React, { useEffect } from 'react';
import Header from '../../parts/templates/Header';
import PageDetailTitle from '../../parts/templates/PageDetailTitle';
import FeaturedImage from '../../parts/templates/FeaturedImage';
import PageDetailDescription from '../../parts/templates/PageDetailDesc';
import BookingForm from '../../parts/templates/BookingForm';
import Testimony from '../../parts/templates/Testimony';
import Footer from '../../parts/templates/Footer';
import { Fade } from 'react-reveal';
import { connect } from 'react-redux';
import { checkoutBooking } from '../../store/actions/checkout';
import {fetchPage} from "../../store/actions/page";
import Activities from '../../parts/templates/Activities';

const DetailPage = (props) => {

    const {page, match} = props;


    useEffect(() => {
       document.title = "Details Page";
       window.scrollTo(0, 0);

       if (!page[match.params.id]) { // ini kalo property nya dinamis, contoh page.{_id}
        props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${match.params.id}`, match.params.id);
    }
    });

    if (!page[match.params.id]) return null;

    const breadcrumb = [
        {pageTitle: "Home", pageHref: ""},
        {pageTitle: "House Details", pageHref: ""},
    ]

    return (
        <>

        <Header {...props} />
        <PageDetailTitle
        breadcrumb={breadcrumb}
        data={page[match.params.id]}
        ></PageDetailTitle>
        <FeaturedImage
        data={page[match.params.id].imageId}
        ></FeaturedImage>
        <section className="container">
            <div className="row">
                <div className="col-7 pr-5">
                    <Fade bottom>
                    <PageDetailDescription data={page[match.params.id]} />
                    </Fade>
                </div>
                <div className="col-5">
                    <Fade bottom>
                    <BookingForm itemDetails={page[match.params.id]} startBooking={props.checkoutBooking}/>
                    </Fade>
                </div>
            </div>
        </section>

        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />

        </>
    )
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps, {checkoutBooking, fetchPage})(DetailPage);
