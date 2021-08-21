import React from 'react';
import { Fade } from 'react-reveal';
import Button from '../../elements/Button/Button';

export default function MostPicked(props) {
    return (
        <section>
            <Fade bottom>
            <div className="container" ref={props.refMostPicked}>
                <h4 className="mb-3">Most Picked</h4>
                <div className="container-grid">
                    {
                        props.data.map((item, index) => {
                            return <div key={`mostPicked - ${index}`} className={`item column-4 ${index > 0 ? "row-1" : "row-2"}`}>
                                <Fade bottom delay={500 * index}>
                            <div className="card card-featured">
                                <div className="tag">
                                    ${item.price}
                                    <span className="font-weight-light">per {item.unit}</span>
                                </div>
                                <figure className="img-wrapper">
                                    <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                </figure>
                                <div className="meta-wrapper">
                                    <Button className="stretched-link d-block text-white" type="link" href={`/properties/${item._id}`}> 
                                        <h5>{item.name}</h5>
                                    </Button>
                                    <span>
                                        {item.city}, {item.country}
                                    </span>
                                </div>
                            </div>
                            </Fade>
                            </div>
                        })
                    }
                </div>
            </div>
        </Fade>
        </section>
    )
}
