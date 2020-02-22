import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testinglibrary/jest-dom/extend-expect';
import ContactForm from './ContactForm';
import { MutationObserver } from 'mutationobserver-shim';

test("It renders without crashing" , () => {
   render(<ContactForm />)

});

describe('All Fields rendering', async () => {
    const component = render(<ContactForm />)
    it('first name is defined', () => {       
        const firstname = component.getByText(/firstname/i)
        expect(firstname).not.toHaveLength();    
  });
  test('last name is defined', () => {
    const lastname = component.getByText(/lastname/i)
    expect(lastnamt).not.toHaveLength();
  

  })
  test('email is defined', () => {


  })

})
