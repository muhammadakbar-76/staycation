import React from 'react'
import Star from '../../elements/Star/Star';
import TestimonyAccent from '../../assets/images/testimonial-landingpages-frame.jpg';
import Button from '../../elements/Button/Button';
import { Fade } from 'react-reveal';

const Testimony = ({data}) => {
    return (
        <section className="container">
            <Fade bottom>
            <div className="row align-items-center">
                <div className="col-auto" style={{marginRight: 70}}>
                    <div className="testimonial-hero" style={{margin: "30px 0 0 30px"}}>
                        <img src={TestimonyAccent} alt="testimonial frame" className="position-absolute" style={{margin: "-30px 0 0 -30px",zIndex: 1}}/>
                        <img src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`} alt="testimonial" className="position-absolute" style={{zIndex: 1}}/>
                    </div>
                </div>
                <div className="col">
                    <h4 style={{marginBottom: 40}}>
                        {data.name}
                    </h4>
                     <Star value={data.rate} width={35} height={35} spacing={4} />
                     <h5 className="h2 font-weight-light line-height-2 my-3">{data.content}</h5>
                     <span className="text-gray-500">
                         {data.familyName}, {data.familyOccupation}
                     </span>

                     <div>
                         <Button className="btn px-5" style={{marginTop: 40}} hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>Read Their Story</Button>
                     </div>
                </div>
            </div>
            </Fade>
        </section>
    )
}

export default Testimony;