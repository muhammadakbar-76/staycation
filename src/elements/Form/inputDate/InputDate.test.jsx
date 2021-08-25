import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InputDate from './InputDate';

const TestInput = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    });

    const handleChange = e => {
        setValue(e.target.value);
    }

    return (
        <InputDate
        max={30}
        onChange={handleChange}
        name="value"
        value={value}
        />
    )
}

const setup = () => {
    const { container } = render(<TestInput />);
    const wrapper = container.querySelector(`.input-date`);
    const input = container.querySelector(`input.form-control`);

    return {
        container,
        wrapper,
        input
    }
}

test('should have wrapper with className .form-control', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeInTheDocument();
});

test('should have tag <input> and has className .form-control', () => {
    const { input } = setup();

    expect(input).toBeInTheDocument();
});

test('should show datepicker when click input field', () => {
    const { container , input } = setup();

    fireEvent.click(input, { button: 1 });
    const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
    // screen.debug();

    expect(datePickerWrapper).toBeInTheDocument();
});
