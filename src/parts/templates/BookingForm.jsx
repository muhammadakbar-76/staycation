import React, { useState, useEffect, useRef } from 'react';
import propTypes from "prop-types";
import { InputNumber, InputDate } from '../../elements/Form';
import Button from '../../elements/Button/Button';
import { withRouter } from 'react-router-dom';


const BookingForm = (props) => {

    const { itemDetails } = props;

    const mounted = useRef();

    const [data, setData] = useState({
        duration: 1,
        date: {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    })

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        }
        else {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(data.date.endDate);
            const countDuration = new Date(endDate - startDate).getDate();
    
            setData({
               ...data,
               duration: countDuration
            })
        }

    }, [JSON.stringify(data.date)]);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        }
        else {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(
                startDate.setDate(startDate.getDate() + data.duration - 1)
            );
    
            setData({
                ...data,
                date: {
                    ...data.date,
                    endDate: endDate
                }
            })
        }
    }, [JSON.stringify(data.duration)]);

    const startBook = () => {
        props.startBooking({
            _id: itemDetails._id,
            duration: data.duration,
            date: {
                startDate: data.date.startDate,
                endDate: data.date.endDate
            }
        });
        props.history.push("/checkout");
    }

    return (
       <div className="card bordered" style={{padding: '60px 80px'}}>
           <h4 className="mb-3">Start Booking</h4>
           <h5 className="h2 text-teal mb-4">
               ${itemDetails.price}{" "}
               <span className="text-gray-500 font-weight-light">
                   per {itemDetails.unit}
               </span>
           </h5>
           <label htmlFor="duration">How long will you stay?</label>
           <InputNumber
           max={30}
           suffix=" night"
           isSuffixPrular
           onChange={updateData}
           name="duration"
           value={data.duration}
           />

           <label htmlFor="date">Pick a date</label>
           <InputDate onChange={updateData} name="date" value={data.date} />

           <h6 className="text-gray-500 font-weight-light" style={{marginBottom: 40}}>
               You will pay{" "}
               <span className="text-gray-900">
                   ${itemDetails.price * data.duration} USD
               </span>{" "}
               per{" "}
               <span className="text-gray-900">
                   {data.duration} {data.duration > 1 ? `${itemDetails.unit}s` : itemDetails.unit}
               </span>
           </h6>

        <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={startBook}>
            Continue to book
        </Button>

       </div>
    )
}

BookingForm.propTypes = {
    itemDetails: propTypes.object,
    startBooking: propTypes.func
}

export default withRouter(BookingForm)