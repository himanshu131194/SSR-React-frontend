import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function Page({ title, children }) {
  return (
    <main id="content" role="main" className="main pt-0">
      <div className="container-fluid px-3">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">
            <div className="position-absolute top-0 start-0 end-0 mt-3 mx-3">
              <div className="d-none d-lg-flex justify-content-between">
                <a href="./index.html">
                  <img
                    className="w-100"
                    src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/logos/logo.svg"
                    alt="Image Description"
                    data-hs-theme-appearance="default"
                    style={{ minWidth: '7rem', maxWidth: '7rem' }}
                  />
                </a>
              </div>
            </div>
            <div style={{ maxWidth: '23rem' }}>
              <div className="text-center mb-5">
                <img
                  className="img-fluid"
                  src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/illustrations/oc-chatting.svg"
                  alt="Image Description"
                  style={{ width: '12rem' }}
                  data-hs-theme-appearance="default"
                />
                <img
                  className="img-fluid"
                  src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/illustrations-light/oc-chatting.svg"
                  alt="Image Description"
                  style={{ width: '12rem' }}
                  data-hs-theme-appearance="dark"
                />
              </div>
              <div className="mb-5">
                <h2 className="display-5">Build digital products with:</h2>
              </div>
              <ul className="list-checked list-checked-lg list-checked-primary list-py-2">
                <li className="list-checked-item">
                  <span className="d-block fw-semi-bold mb-1">
                    All-in-one tool
                  </span>
                  Build, run, and scale your apps - end to end
                </li>
                <li className="list-checked-item">
                  <span className="d-block fw-semi-bold mb-1">
                    Easily add &amp; manage your services
                  </span>
                  It brings together your tasks, projects, timelines, files and
                  more
                </li>
              </ul>
              <div className="row justify-content-between mt-5 gx-3">
                <div className="col">
                  <img
                    className="img-fluid"
                    src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/brands/gitlab-gray.svg"
                    alt="Logo"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid"
                    src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/brands/fitbit-gray.svg"
                    alt="Logo"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid"
                    src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/brands/flow-xo-gray.svg"
                    alt="Logo"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid"
                    src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/brands/layar-gray.svg"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
