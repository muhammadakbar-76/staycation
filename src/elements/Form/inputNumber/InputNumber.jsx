import React, {useState} from 'react';
import propTypes from 'prop-types';
import './InputNumber.scss';

const InputNumber = (props) => {

    const {value, placeholder, name, min, max, prefix, suffix, isSuffixPrular} = props;
    
    const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

    const onChange = e => {
        let value = String(e.target.value);
        if (prefix) value = value.replace(prefix); //jika 1 parameter doang, string akan dihapus
        if (suffix) value = value.replace(suffix);

        const patternNumeric = new RegExp("[0-9]*");
        const isNumeric = patternNumeric.test(value);

        if (isNumeric && +value <= max && +value >= min) { //tanda + merupakan changer ke number, misal input "32" jadi 32
            props.onChange({
                target: {
                    name,
                    value: +value
                }
            });
            setInputValue(`${prefix}${value}${suffix}${isSuffixPrular && value > 1 ? "s" : ""}`);
        }
    };

    const minus = () => {
        value > min && onChange({
            target: {
                name,
                value: +value - 1
            }
        })
    }

    const plus = () => {
        value < max && onChange({
            target: {
                name,
                value: +value + 1
            }
        })
    }

    return (
        <div className={["input-number mb-3", props.outerClassName].join(" ")}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text minus" onClick={minus}>
              -
            </span>
          </div>
          <input
            min={min}
            max={max}
            name={name}
            pattern="[0-9]*"
            className="form-control"
            placeholder={placeholder ? placeholder : "0"}
            value={String(InputValue)}
            onChange={onChange}
          />
          <div className="input-group-append">
            <span className="input-group-text plus" onClick={plus}>
              +
            </span>
          </div>
        </div>
      </div>
    )
}

InputNumber.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
    suffix: ""
}

InputNumber.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
    onChange: propTypes.func,
    isSuffixPrular: propTypes.bool,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}

export default InputNumber;