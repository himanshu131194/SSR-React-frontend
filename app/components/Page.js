import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Test from './Test';

export default function Page({ title, children }) {
  return (
    <>
      <Helmet title={title} />
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
