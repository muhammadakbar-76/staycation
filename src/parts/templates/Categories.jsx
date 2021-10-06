import React from 'react';
import Button from '../../elements/Button/Button';
import { Fade } from 'react-reveal';

export default function Categories({data}) {
    return ( data.map((cat, index) => {
        return (
        <section className="container" key={`cat - ${index}`}>
            <Fade bottom>
            <h4 className="mb-3 font-weight-medium">{cat.name}</h4>
            <div className="container-grid">
                {
                    cat.itemId.length === 0 ? <div className="row">
                        <div className="col-auto align-items-center">
                            There is no destination at this category
                        </div>
                    </div> : cat.itemId.map((item,index2) => {
                        return(
                            <div className="item column-3 row-1" key={`category - ${index}item - ${index2}`}>
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
                                    <img src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`} alt={item.title} className="img-cover" />
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button className="streched-link d-block text-gray-800" href={`/properties/${item._id}`} type="link">
                                            <h5 className="h4">{item.title}</h5>
                                        </Button>
                                        <span className="text-gray-500">
                                            {item.city}, {item.country}
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
    }) )
}
