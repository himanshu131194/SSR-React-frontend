import { AccountPage } from '../../../components';

export default function Reset() {
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
                <h1 class="display-5">Forgot password?</h1>
                <p>
                  Enter the email address you used when you joined and we'll
                  send you instructions to reset your password.
                </p>
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label" for="resetPasswordSrEmail" tabindex="0">
                Your email
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                name="email"
                id="resetPasswordSrEmail"
                tabindex="1"
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                required=""
              />
              <span class="invalid-feedback">
                Please enter a valid email address.
              </span>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary btn-lg">
                Submit
              </button>
              <div class="text-center">
                <a
                  class="btn btn-link"
                  href="./authentication-login-cover.html"
                >
                  <i class="bi-chevron-left"></i> Back to Sign in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AccountPage>
  );
}
