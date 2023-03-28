import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Answer from '../components/answer.jsx';
import AnswersList from '../components/answers-list.jsx';
import ImgFullscreenModal from '../components/img-fullscreen-modal.jsx';

describe('Image Fullscreen Modal', () => {
  test('renders the Image Full Screen component and initially hidden', () => {
    const isModalOpen = false;
    const setIsModalOpen = jest.fn();
    const fullscreenImageURL = 'https://www.cnet.com/a/img/resize/b7707b8ad323bc77e6c9baca0e0950097fdb40f0/hub/2020/11/05/27b4a2c6-e262-4136-8edc-ceb2715371a2/guardians1.jpg?auto=webp&fit=crop&height=675&width=1200';

    render(<ImgFullscreenModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} fullscreenImageURL={fullscreenImageURL}/>);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).not.toHaveClass('modal-open');
  })

})