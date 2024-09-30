// VolumeControl.test.tsx
import { it, expect } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import VolumeControl from '../components/VolumeControl';

const { container, getByRole } = render(<VolumeControl onVolumeChange={() => {}} />);

it('renders VolumeControl at initial volume', () => {
  // Instead of container.firstChild, directly match the snapshot against the container
  expect(container).toMatchSnapshot();
});

it('updates VolumeControl when the slider is moved', async () => {
  const slider = getByRole('slider');
  fireEvent.change(slider, { target: { value: '75' } });

  // Wait for the component to re-render after the state update
  await waitFor(() => {
    expect(container).toMatchSnapshot(); 
  });
});