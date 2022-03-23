import Login from '../Components/login/Login';
import { render, screen } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from "react-dom";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


describe('Login Component TestCases', () => {
    let element='';

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
      });

      afterEach(() => {
        unmountComponentAtNode(element);
    element.remove();
    element = null;
      })

      test('Should Login Have Rendering', () => {
        render(<Router><Login /></Router>);
      });

      test('Should have class container in Login Component', () => {
        render(<Router><Login /></Router>);
        expect(screen.getByTestId('conId')).toHaveClass('container');
      });

      test('Should have atleast two input in Login component', () => {
        renderer(<Router><Login /></Router>, element);
        const count = element.getElementsByTagName('input').length;
        expect(count).toBeGreaterThanOrEqual(2);
      });
      
      test('Should have login text on button of Login Component', () => {
        render(<Router><Login /></Router>);
        expect(screen.getByTestId('logId')).toHaveTextContent('Login');
      });

      test('Should render login component with Remember me', () => {
        render(<Router><Login /></Router>);
        expect(screen.getByText(/Remember me/)).toBeInTheDocument();
      });


    });

