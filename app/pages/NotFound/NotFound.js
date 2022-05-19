import { Page, HttpStatus } from '../../components';

export default function NotFound() {
  return (
    <Page title="Not Found">
      <HttpStatus statusCode={404}>
        <main id="content" role="main" class="main">
          <div class="content container-fluid">
            <div class="row justify-content-center align-items-sm-center py-sm-10">
              <div class="col-9 col-sm-6 col-lg-4">
                <div class="text-center text-sm-end me-sm-4 mb-5 mb-sm-0">
                  <img
                    class="img-fluid"
                    src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/illustrations/oc-thinking.svg"
                    alt="Image Description"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 text-center text-sm-start">
                <h1 class="display-1 mb-0">404</h1>
                <p class="lead">
                  Sorry, the page you're looking for cannot be found.
                </p>
                <a class="btn btn-primary" href="/">
                  Go back to the App
                </a>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="row justify-content-between align-items-center">
              <div class="col">
                <p class="fs-6 mb-0">
                  © Front.{' '}
                  <span class="d-none d-sm-inline-block">2022 Htmlstream.</span>
                </p>
              </div>
              <div class="col-auto">
                <div class="d-flex justify-content-end">
                  <ul class="list-inline list-separator">
                    <li class="list-inline-item">
                      <a class="list-separator-link" href="#">
                        FAQ
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="list-separator-link" href="#">
                        License
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <button
                        class="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle"
                        type="button"
                      >
                        <i class="bi-command"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </HttpStatus>
    </Page>
  );
}
