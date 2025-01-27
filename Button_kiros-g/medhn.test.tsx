import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders the Button component with default props', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
  });

  it('applies custom styles based on props', () => {
    render(<Button variant="destructive">Delete</Button>);

    const button = screen.getByText('Delete');
    expect(button).toHaveClass('bg-destructive');
  });
});
