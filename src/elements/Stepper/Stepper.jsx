import React, { useState } from 'react';
import propTypes from "prop-types";

const Stepper = (props) => {

    const {steps , initialStep} = props;
    const stepsKeys = Object.keys(steps); //object.keys return array berisi nama properti/enumerable dari suatu object
    
    const [ currentStep, setCurrentStep ] = useState(
        stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
    )
    const totalStep = stepsKeys.length;
    const indexStep = stepsKeys.indexOf(currentStep); // return angka

    function prevStep(){
        if (+indexStep > 0) {
            setCurrentStep(stepsKeys[indexStep - 1]);
        }
    }

    function nextStep(){
        if (+indexStep < totalStep) {
            setCurrentStep(stepsKeys[indexStep + 1]);
        }
    }

    return (
       <>{props.children(prevStep, nextStep, currentStep, steps)}</>
    )
}

Stepper.propTypes = {
    steps: propTypes.object.isRequired,
    initialStep: propTypes.string
}

export default Stepper;

export {default as Controller} from "./Controller/Controller.jsx";
export {default as MainContent} from "./MainContent/MainContent.jsx";
export {default as Meta} from "./Meta/Meta.jsx";
export {default as Numbering} from "./Numbering/Numbering.jsx";