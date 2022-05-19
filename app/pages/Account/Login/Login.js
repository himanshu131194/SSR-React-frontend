import { AccountPage } from '../../../components';

export default function Account() {
  const updateValue = e => {
    e.preventDefault();
    console.log('update value');
  };
  return (
    <AccountPage title="Home">
      <div class="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
        <div
          class="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
          style={{ maxWidth: '25rem' }}
        >
          <form class="js-validate needs-validation" novalidate="">
            <div class="text-center">
              <div class="mb-5">
                <h1 class="display-5">Sign in</h1>
                <p>
                  Don't have an account yet?{' '}
                  <a class="link" href="./authentication-signup-cover.html">
                    Sign up here
                  </a>
                </p>
              </div>
              <div class="d-grid mb-4">
                <a class="btn btn-white btn-lg" href="#">
                  <span class="d-flex justify-content-center align-items-center">
                    <img
                      class="avatar avatar-xss me-2"
                      src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/brands/google-icon.svg"
                      alt="Image Description"
                    />
                    Sign in with Google
                  </span>
                </a>
              </div>
              <span class="divider-center text-muted mb-4">OR</span>
            </div>
            <div class="mb-4">
              <label class="form-label" htmlFor="signinSrEmail">
                Your email
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                name="email"
                id="signinSrEmail"
                tabindex="1"
                placeholder="email@address.com"
                aria-label="email@address.com"
                required=""
              />
              <span class="invalid-feedback">
                Please enter a valid email address.
              </span>
            </div>
            <div class="mb-4">
              <label
                class="form-label w-100"
                htmlFor="signupSrPassword"
                tabindex="0"
              >
                <span class="d-flex justify-content-between align-items-center">
                  <span>Password</span>
                  <a
                    class="form-label-link mb-0"
                    href="./authentication-reset-password-cover.html"
                  >
                    Forgot Password?
                  </a>
                </span>
              </label>
              <div
                class="input-group input-group-merge"
                data-hs-validation-validate-class=""
              >
                <input
                  type="password"
                  class="js-toggle-password form-control form-control-lg"
                  name="password"
                  id="signupSrPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required=""
                  minLength="8"
                />
                <a
                  id="changePassTarget"
                  class="input-group-append input-group-text"
                  href="javascript:;"
                >
                  <i id="changePassIcon" class="bi-eye-slash"></i>
                </a>
              </div>
              <span class="invalid-feedback">
                Please enter a valid password.
              </span>
            </div>
            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="termsCheckbox"
              />
              <label class="form-check-label" htmlFor="termsCheckbox">
                Remember me
              </label>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary btn-lg">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </AccountPage>
  );
}
