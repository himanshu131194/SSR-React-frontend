import { AccountPage } from '../../../components';

export default function Email() {
  return (
    <AccountPage title="Home">
      <div class="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
        <div
          class="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
          style={{ maxWidth: '25rem' }}
        >
          <div class="text-center">
            <div class="mb-4">
              <img
                class="avatar avatar-xxl avatar-4x3"
                src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/illustrations/oc-email-verification.svg"
                alt="Image Description"
              />
            </div>
            <h1 class="display-5">Verify your email</h1>
            <p class="mb-1">We've sent a link to your email address:</p>
            <span class="d-block text-dark fw-semi-bold mb-1">
              mark@gmail.com
            </span>
            <p>Please follow the link inside to continue.</p>
            <div class="mt-4 mb-3">
              <a class="btn btn-primary" href="./index.html">
                Skip now
              </a>
            </div>
            <p>
              Didn't receive an email? <a href="#">Resend</a>
            </p>
          </div>
        </div>
      </div>
    </AccountPage>
  );
}
