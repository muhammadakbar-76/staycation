import React from 'react';
import { render} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './Button';

test("Should not allowed to click this button if disabled", () => {
    const {container} = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
    const {container, getByText} = render(<Button isloading />);

    expect(getByText(/loading/i)).toBeInTheDocument();

    expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
    const {container} = render(<Button type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Shoul render <Link> component", () => {
    const {container} = render(<Router><Button href="" type="link"></Button></Router>);

    expect(container.querySelector("a")).toBeInTheDocument();
});