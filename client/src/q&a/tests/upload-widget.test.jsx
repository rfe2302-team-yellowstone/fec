/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UploadWidget from '../components/upload-widget.jsx';
import axios from 'axios';

jest.mock('axios');

describe('Upload Widget', () => {

  test('renders the answer component and the helpful and report buttons', () => {
    const TestComponent = () => {
      const [imageURLs, setImageURLs] = useState([]);

      return (
        <UploadWidget imageURLs={imageURLs} setImageURLs={setImageURLs}/>
      );
    }

    render(<TestComponent />);
    expect(screen.getByRole('button', {name: 'Upload'})).toBeInTheDocument();
  })
})