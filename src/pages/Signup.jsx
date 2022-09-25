import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div class="brand-logo">
                    <img
                      src="https://www.bootstrapdash.com/demo/skydash/template/images/logo.svg"
                      alt="logo"
                    />
                  </div>
                  <h4 style={{ fontFamily: "sans-serif" }}>New here?</h4>
                  <h6
                    class="font-weight-light"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Signing up is easy. It only takes a few steps
                  </h6>
                  <form class="pt-3">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="exampleInputUsername1"
                        placeholder="Name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="mt-3 text-center">
                      <Link
                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        to="/"
                      >
                        SIGN UP
                      </Link>
                    </div>
                    <div class="text-center mt-4 font-weight-light">
                      Already have an account?
                      <Link to="/login" class="text-primary">
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
