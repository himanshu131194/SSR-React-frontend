import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Email from '../Email';

describe('Email', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Email />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
