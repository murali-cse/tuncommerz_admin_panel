import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img
                      src="https://www.bootstrapdash.com/demo/skydash/template/images/logo.svg"
                      alt="logo"
                    />
                  </div>
                  <h4 style={{ fontFamily: "sans-serif" }}>
                    Hello! let's get started
                  </h4>
                  <h6
                    className="font-weight-light"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Sign in to continue.
                  </h6>
                  <Form className="pt-4">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-3">
                      <Link
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        to="/"
                      >
                        SIGN IN
                      </Link>
                    </div>

                    <div className="my-5 d-flex justify-content-between align-items-center">
                      <Form.Check
                        id="test"
                        type="checkbox"
                        label=" Keep me signed in"
                      />

                      <a href="#" className="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <a href="register.html" className="text-primary">
                        Create
                      </a>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
