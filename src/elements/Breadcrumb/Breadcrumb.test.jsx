import React from 'react';
import { render } from "@testing-library/react";
import Breadcrumb from './Breadcrumb';
import { BrowserRouter as Router } from 'react-router-dom';

const setup = () => {
    const breadcrumbList = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" }
      ];
      const { container } = render(
        <Router>
          <Breadcrumb data={breadcrumbList} className={["anjay","pleaseJgnSange"]}/>
        </Router>
      );
      const breadcrumb = container.querySelector(`.breadcrumb`);
    
      return {
        breadcrumb
      };
}

test('should have <ol> with className .breadcrumb and have text home & house details', () => {
    const {breadcrumb} = setup();

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toHaveTextContent("House Details");
})
