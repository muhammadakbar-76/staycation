import React, {useEffect, useState} from 'react';
import Header from '../../parts/templates/Header';
import { Fade } from 'react-reveal';
import Button from '../../elements/Button/Button';
import Stepper, {
    Numbering,
    Meta,
    MainContent,
    Controller
} from '../../elements/Stepper/Stepper.jsx';
import BookingInformation from '../../parts/templates/Checkout/BookingInformation';
import Payment from '../../parts/templates/Checkout/Payment';
import Completed from '../../parts/templates/Checkout/Completed';
import ItemDetails from "../../json/itemDetails.json";
import { connect } from 'react-redux';
import { submitBooking } from '../../store/actions/checkout';

const CheckOut = (props) => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        proofPayment: "",
        bankName: "",
        bankHolder: "",
    });

    const onChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const submit = () => {
      const payload = new FormData();
      const { checkout } = props;
      payload.append("firstName", data.firstName);
      payload.append("lastName", data.lastName);
      payload.append("email", data.email);
      payload.append("phoneNumber", data.phone);
      payload.append("itemId", checkout._id);
      payload.append("duration", checkout.duration);
      payload.append("bookingStartDate", checkout.date.startDate);
      payload.append("bookingEndDate", checkout.date.endDate);
      payload.append("accountHolder", data.bankHolder);
      payload.append("bankFrom", data.bankName);
      payload.append("image", data.proofPayment);
      payload.append("bankId", data.bankName);
    }

    useEffect(() => {
       window.scroll(0, 0);
    }, []);

    const {checkout, page} = props;
    
    if (!checkout) {
      return <div className="container">
        <div className="row align-items-center justify-content-center text-center"  style={{height: "100vh"}}>
          <div className="col-3">
            pilih kamar dulu
            <div>
              <Button className="btn mt-5" type="link" onClick={() => props.history.goBack()} isPrimary hasShadow>
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    }

    const steps = {
        bookingInformation: {
            title: "Booking Information",
            description: "Please fill up the blank fields below",
            content: (
              <BookingInformation
                data={data}
                checkout={checkout}
                ItemDetails={page[checkout._id]}
                onChange={onChange}
              />
            ),
          },
          payment: {
            title: "Payment",
            description: "Kindly follow the instructions below",
            content: (
              <Payment
                data={data}
                ItemDetails={page[checkout._id]}
                checkout={checkout}
                onChange={onChange}
              />
            ),
          },
          completed: {
            title: "Yay! Completed",
            description: null,
            content: <Completed />,
          },
        };

    return (
        <>
            <Header isCentered />

            <Stepper steps={steps}>
                {
                    (prevStep, nextStep, currentStep, steps) => ( //wow its not an arrow function? it is, but immediately returning
                        <>
                          <Numbering
                            data={steps}
                            current={currentStep}
                            style={{marginBottom: 50}}
                          />

                          <Meta data={steps} current={currentStep} />

                          <MainContent data={steps} current={currentStep} />

                          {currentStep === "bookingInformation" && (
                          <Controller>
                            {data.firstName !== "" &&
                              data.lastName !== "" &&
                              data.email !== "" &&
                              data.phone !== "" && (
                                <Fade>
                                  <Button
                                    className="btn mb-3"
                                    type="button"
                                    isBlock
                                    isPrimary
                                    hasShadow
                                    onClick={nextStep} //karena ini props children dari stepper, onClick ini punya component Stepper bukan parent nya
                                  >
                                    Continue to Book
                                  </Button>
                                </Fade>
                              )}
                            <Button
                              className="btn"
                              type="link"
                              isBlock
                              isLight
                              href={`/properties/${ItemDetails._id}`}
                            >
                              Cancel
                            </Button>
                          </Controller>
                        )}

                        {currentStep === "payment" && (
                          <Controller>
                            {data.proofPayment !== "" &&
                              data.bankName !== "" &&
                              data.bankHolder !== "" && (
                                <Fade>
                                  <Button
                                    className="btn mb-3"
                                    type="button"
                                    isBlock
                                    isPrimary
                                    hasShadow
                                    onClick={nextStep}
                                  >
                                    Continue to Book
                                  </Button>
                                </Fade>
                              )}
                            <Button
                              className="btn"
                              type="button"
                              isBlock
                              isLight
                              onClick={prevStep}
                            >
                              Cancel
                            </Button>
                          </Controller>
                        )}

                        {currentStep === "completed" && (
                          <Controller>
                            <Button
                              className="btn"
                              type="link"
                              isBlock
                              isPrimary
                              hasShadow
                              href=""
                            >
                              Back to Home
                            </Button>
                          </Controller>
                        )}
                        </>
                    )
                }
            </Stepper>
       </>
    )
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page
});

export default connect(mapStateToProps, {submitBooking})(CheckOut)