import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button/Button';
import './Breadcrumb.scss';

const Breadcrumb = (props) => {
    const {className} = props;

    return (
        <nav aria-label="breadcrumb">
          <ol className={`breadcrumb ${className.join(" ")}`}>
            {props.data.map((item, index) => {
              return (
                <li
                  key={`breadcrumb-${index}`}
                  className={`breadcrumb-item${
                    index === props.data.length - 1 ? " active" : ""
                  }`}
                >
                  {index === props.data.length - 1 ? (
                    item.pageTitle
                  ) : (
                    <Button type="link" href={item.pageHref}>
                      {item.pageTitle}
                    </Button>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      );
}

Breadcrumb.propTypes = {
    data : propTypes.array,
    className: propTypes.oneOfType([propTypes.string,propTypes.array])
}

export default Breadcrumb;
