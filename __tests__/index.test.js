import { render, screen } from '@testing-library/react';
import CTAText from '../src/components/CTAtext';
import AffiliationsIcon from '../src/components/AffiliationsIcon';
import TodoIcon from '../src/components/TodoIcon';
import '@testing-library/jest-dom';

describe('CTAText', () => {
  it('renders all texts on component', async () => {
    render(<CTAText />);

    const heading = await screen.findByTestId('heading');
    const heading2 = await screen.findByTestId('heading-2');
    const heading3 = await screen.findByTestId('heading-3');
    const ctaList = await screen.findAllByTestId('cta-list');

    expect(heading).toHaveTextContent('See Dash in Action.');

    expect(heading2).toHaveTextContent(
      'Thank you for your interest in Dash Enterprise.'
    );
    expect(heading3).toHaveTextContent(
      "We'll be in touch soon to schedule a demo."
    );
    expect(ctaList).toHaveLength(3);
  });
});

describe('Affiliations Icon', () => {
  it('renders the  box for affiliation icon', async () => {
    render(<AffiliationsIcon />);

    const affiliationBox = await screen.findByTestId('affiliations');

    expect(affiliationBox).toBeInTheDocument();
  });
});

describe('Todo Icon', () => {
  it('renders the  box containing todo icon', async () => {
    render(<TodoIcon />);

    const todoBox = await screen.findByTestId('todo-icon');

    expect(todoBox).toBeInTheDocument();
  });
});
