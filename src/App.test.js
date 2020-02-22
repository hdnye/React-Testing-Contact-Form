import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testinglibrary/jest-dom/extend-expect';
import { MutationObserver } from 'mutationobserver-shim';
import App from './App';
import ContactForm from './ContactForm';

test('App Renders without crashing', () => {
    render(<App />)
});