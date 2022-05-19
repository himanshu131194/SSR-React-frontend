import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Facotor from '../Facotor';

describe('Facotor', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Facotor />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
