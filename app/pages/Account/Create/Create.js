import { AccountPage } from '../../../components';

export default function Account() {
  const updateValue = e => {
    e.preventDefault();
    console.log('update value');
  };
  return (
    <AccountPage title="Home">
      <div className="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
        <div
          className="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
          style={{ maxWidth: '25rem' }}
        >
          <div className="text-center">
            <div className="mb-5">
              <h1 className="display-5">Create your account</h1>
              <p>
                Already have an account?{' '}
                <a className="link" href="./authentication-login-cover.html">
                  Sign in here
                </a>
              </p>
            </div>
            <div className="d-grid mb-4">
              <a className="btn btn-white btn-lg" href="#">
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    className="avatar avatar-xss me-2"
                    src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/brands/google-icon.svg"
                    alt="Image Description"
                  />
                  Sign up with Google
                </span>
              </a>
            </div>
            <span className="divider-center text-muted mb-4">OR</span>
          </div>
          <label className="form-label" for="fullNameSrEmail">
            Full name
          </label>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="fullName"
                  id="fullNameSrEmail"
                  placeholder="Mark"
                  aria-label="Mark"
                  required=""
                />
                <span className="invalid-feedback">
                  Please enter your first name.
                </span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Williams"
                  aria-label="Williams"
                  required=""
                />
                <span className="invalid-feedback">
                  Please enter your last name.
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label" for="signupSrEmail">
              Your email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              id="signupSrEmail"
              placeholder="Markwilliams@site.com"
              aria-label="Markwilliams@site.com"
              required=""
            />
            <span className="invalid-feedback">
              Please enter a valid email address.
            </span>
          </div>
          <div className="mb-4">
            <label className="form-label" for="signupSrPassword">
              Password
            </label>
            <div
              className="input-group input-group-merge"
              data-hs-validation-validate-className=""
            >
              <input
                type="password"
                className="js-toggle-password form-control form-control-lg"
                name="password"
                id="signupSrPassword"
                placeholder="8+ characters required"
                aria-label="8+ characters required"
                required=""
                minlength="8"
              />
              <a
                className="js-toggle-password-target-1 input-group-append input-group-text"
                href="javascript:;"
              >
                <i className="js-toggle-password-show-icon-1 bi-eye-slash"></i>
              </a>
            </div>
            <span className="invalid-feedback">
              Your password is invalid. Please try again.
            </span>
          </div>
          <div className="mb-4">
            <label className="form-label" for="signupSrConfirmPassword">
              Confirm password
            </label>
            <div
              className="input-group input-group-merge"
              data-hs-validation-validate-className=""
            >
              <input
                type="password"
                className="js-toggle-password form-control form-control-lg"
                name="confirmPassword"
                id="signupSrConfirmPassword"
                placeholder="8+ characters required"
                aria-label="8+ characters required"
                required=""
                minlength="8"
              />
              <a
                className="js-toggle-password-target-2 input-group-append input-group-text"
                href="javascript:;"
              >
                <i className="js-toggle-password-show-icon-2 bi-eye-slash"></i>
              </a>
            </div>
            <span className="invalid-feedback">
              Password does not match the confirm password.
            </span>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="termsCheckbox"
              required=""
            />
            <label className="form-check-label" for="termsCheckbox">
              I accept the <a href="#">Terms and Conditions</a>
            </label>
            <span className="invalid-feedback">
              Please accept our Terms and Conditions.
            </span>
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={updateValue}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </AccountPage>
  );
}
