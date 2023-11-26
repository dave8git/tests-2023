import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Component ResultBox', () => {


    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />)
    })


const conversionPLNTOUSD = [
    { amount: 40, expected: 'PLN 40.00 = $11.43' },
    { amount: 240, expected: 'PLN 240.00 = $68.57' },
    { amount: 300, expected: 'PLN 300.00 = $85.71' },
    { amount: 400, expected: 'PLN 400.00 = $114.29' },
  ];
  
  const conversionUSDTOPLN = [
    { amount: 133, expected: '$133.00 = PLN 465.50' },
    { amount: 150, expected: '$150.00 = PLN 525.00' },
    { amount: 333, expected: '$333.00 = PLN 1,165.50' },
    { amount: 400, expected: '$400.00 = PLN 1,400.00' },
  ];

  for (const value of conversionPLNTOUSD) {
    it('should render proper info about conversion when PLN -> USD', () => {
        render(<ResultBox from="PLN" to="USD" amount={value.amount} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent(value.expected);
      });
  }
 

  for (const value of conversionUSDTOPLN) {
    it('should render proper info about conversion when USD -> PLN', () => {
      render(<ResultBox from="USD" to="PLN" amount={value.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(value.expected);
    });
  }

  it('should return false if value is < 0', () => {
    render(<ResultBox from="USD" to="PLN" amount={-1} />);
    const output = screen.getByTestId("wrong-value");
    expect(output).toHaveTextContent("Wrong value...");
  })
});



