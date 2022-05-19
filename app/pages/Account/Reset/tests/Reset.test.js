import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Reset from '../Reset';

describe('Reset', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Reset />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
