import ReadNow from '../Components/readNow/Readnow';
import { render} from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';



describe('ReadNow Component TestCases', () => {
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

      test('Should Header Have Rendering', () => {
        render(<Router><ReadNow/></Router>);
      });

    });