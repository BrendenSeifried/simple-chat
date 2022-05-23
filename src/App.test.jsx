import { render } from '@testing-library/react';
import App from './App';
describe('test for CI', () => {
  it('testing for CI', async () => {
    render(<App />);
  });
});
