import { render, screen } from '@testing-library/react';
import PaymentPage from '@/pages/PaymentPage';

describe('PaymentPage', () => {
  it('renders the payment page with a title and payment button', () => {
    render(<PaymentPage />);

    expect(screen.getByText('Complete Your Payment')).toBeInTheDocument();
    expect(screen.getByText('Pay with Chapa')).toBeInTheDocument();
  });
});
