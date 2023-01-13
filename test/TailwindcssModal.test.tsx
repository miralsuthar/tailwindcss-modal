import React from 'react';
import { render, fireEvent, renderHook } from '@testing-library/react';
import { TailwindcssModal } from '../src/components/TailwindcssModal/TailwindcssModal';

import { useModal } from '../src';

describe('TailwindcssModal', () => {
  const { result } = renderHook(() => useModal());
  it('should render', () => {
    const { getByLabelText } = render(
      <TailwindcssModal isOpen={true} onClose={() => {}}>
        <h1>TailwindcssModal</h1>
      </TailwindcssModal>
    );

    expect(getByLabelText('modal-box')).toBeTruthy();
  });

  it('should close when click on close button', async () => {
    const { getByLabelText } = render(
      <TailwindcssModal
        isOpen={result.current.isOpen}
        onClose={result.current.onClose}
        closeOnBackdropClick={true}
      >
        <h1>TailwindcssModal</h1>
      </TailwindcssModal>
    );

    await fireEvent.click(getByLabelText('backdrop'));
    await expect(result.current.isOpen).toBeFalsy();
  });
});
