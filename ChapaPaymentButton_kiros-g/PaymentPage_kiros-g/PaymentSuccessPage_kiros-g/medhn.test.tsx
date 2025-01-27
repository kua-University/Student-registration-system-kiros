import { render, screen } from '@testing-library/react';
import PaymentSuccessPage from '@/pages/PaymentSuccessPage';

describe('PaymentSuccessPage', () => {
  it('renders the success message correctly', () => {
    render(<PaymentSuccessPage />);

    expect(screen.getByText('Payment Successful')).toBeInTheDocument();
    expect(screen.getByText('Thank you for your payment. Your transaction has been completed successfully.')).toBeInTheDocument();
  });
});
