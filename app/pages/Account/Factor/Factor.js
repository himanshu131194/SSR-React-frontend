import { AccountPage } from '../../../components';

export default function Factor() {
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
                src="https://02o15k19t15r05.s3.ap-south-1.amazonaws.com/front-dashboard-v2.0/assets/svg/illustrations/oc-unlock.svg"
                alt="Image Description"
                data-hs-theme-appearance="default"
              />
            </div>
            <div class="mb-5">
              <h1 class="display-5">2-step Verification</h1>
              <p class="mb-0">We sent a verification code to your email.</p>
              <p>Enter the code from the email in the field below.</p>
            </div>
            <div class="row gx-2 gx-sm-3">
              <div class="col">
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control form-control-single-number"
                    name="code1"
                    id="twoStepVerificationSrCodeInput1"
                    placeholder=""
                    aria-label=""
                    maxlength="1"
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="false"
                    autofocus=""
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control form-control-single-number"
                    name="code2"
                    id="twoStepVerificationSrCodeInput2"
                    placeholder=""
                    aria-label=""
                    maxlength="1"
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="false"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control form-control-single-number"
                    name="code3"
                    id="twoStepVerificationSrCodeInput3"
                    placeholder=""
                    aria-label=""
                    maxlength="1"
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="false"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control form-control-single-number"
                    name="code4"
                    id="twoStepVerificationSrCodeInput4"
                    placeholder=""
                    aria-label=""
                    maxlength="1"
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="false"
                  />
                </div>
              </div>
            </div>
            <div class="d-grid mb-3">
              <button type="submit" class="btn btn-primary btn-lg">
                Verify my account
              </button>
            </div>
            <div class="text-center">
              <p>
                Haven't received it? <a href="#">Resend a new code.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccountPage>
  );
}
