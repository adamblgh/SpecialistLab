import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render,screen} from '@testing-library/react';
import { Title } from './Title';

test('should render title',()=>{
    render(<Title />)
    const h1Element=screen.getByText('SPECIALIST LAB™')
    expect(h1Element).toBeInTheDocument()
})