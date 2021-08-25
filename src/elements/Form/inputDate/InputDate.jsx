import React, {useState, useEffect, useRef} from 'react';
import propTypes from "prop-types";
import { DateRange } from 'react-date-range';

import './InputDate.scss';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import formatDate from '../../../utils/formatDate';
import IconCalender from '../../../assets/images/icons/icon-calendar.svg';

const InputDate = (props) => {

    const {value, placeholder, name} = props;

    const [isShowed, setIsShowed] = useState(false);

    const datePickerChange = (value) => {
        const target = {
            target: {
                value: value.selection,
                name
            }
        };
        props.onChange(target);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    });

    const refDate = useRef(null);
    const handleClickOutside = (e) => {
        if (refDate && !refDate.current.contains(e.target)) {
            setIsShowed(false)
        }
    };

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false);
    };

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${value.endDate ? " - " + formatDate(value.endDate) : ""}`;

    return (
        <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={IconCalender} alt="icon calendar" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
    )
}

InputDate.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}

export default InputDate;
