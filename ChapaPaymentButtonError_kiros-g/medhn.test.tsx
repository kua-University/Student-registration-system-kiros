import { render, fireEvent } from '@testing-library/react';
import ChapaPaymentButton from '@/components/ChapaPaymentButton';

global.fetch = jest.fn(() =>
  Promise.reject(new Error('Network Error'))
);

describe('ChapaPaymentButton Error Handling', () => {
  it('handles API errors gracefully', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(
      <ChapaPaymentButton
        amount={1000}
        currency="ETB"
        email="test@example.com"
        firstName="John"
        lastName="Doe"
        tx_ref="tx-123"
      />
    );

    const button = screen.getByText('Pay with Chapa');
    fireEvent.click(button);

    await new Promise(setImmediate); // Wait for the async function to resolve

    expect(alertMock).toHaveBeenCalledWith('Failed to initialize payment. Please try again.');
  });
});
