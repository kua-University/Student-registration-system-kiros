import { render, fireEvent, screen } from '@testing-library/react';
import ChapaPaymentButton from '@/components/ChapaPaymentButton';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { checkout_url: 'https://chapa.com/checkout' } }),
  })
);

describe('ChapaPaymentButton', () => {
  it('renders correctly and handles payment initialization', async () => {
    const { getByText } = render(
      <ChapaPaymentButton
        amount={1000}
        currency="ETB"
        email="test@example.com"
        firstName="John"
        lastName="Doe"
        tx_ref="tx-123"
      />
    );

    const button = getByText('Pay with Chapa');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(fetch).toHaveBeenCalledWith('/api/initialize-payment', expect.any(Object));
  });

  it('displays loading state while processing', () => {
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

    expect(screen.getByText('Processing...')).toBeInTheDocument();
  });
});
