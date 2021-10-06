import React from 'react';
import Button from '../../elements/Button/Button';
import { Fade } from 'react-reveal';

export default function Activities({data}) {
    if (data.length === 0) return null; 
    
    return (
        <section className="container">
        <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="container-grid">
            {
               data.length === 0 ? <div className="row">
                    <div className="col-auto align-items-center">
                        There is no destination at this activity
                    </div>
                </div> :data.map((item,index2) => {
                    return(
                        <div className="item column-3 row-1" key={`activity - ${index2}`}>
                            <Fade bottom delay={300 * index2}>
                            <div className="card">
                                {item.isPopular && (<div className="tag">
                                    Popular{" "}
                                    <span className="font-weight-light">
                                        Choice
                                    </span>
                                </div>
                                )}
                                <figure className="img-wrapper" style={{height: 180}}>
                                <img src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} alt={item.name} className="img-cover" />
                                </figure>
                                <div className="meta-wrapper">
                                    <Button className="streched-link d-block text-gray-800" href={`/properties/${item._id}`} type="link">
                                        <h5 className="h4">{item.name}</h5>
                                    </Button>
                                    <span className="text-gray-500">
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    )
                })
            }
        </div>
        </Fade>
    </section>
    )
}
