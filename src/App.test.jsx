import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
describe('test for CI', () => {
  it('testing for CI', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
