import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Register(): JSX.Element {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Vui Lòng Nhập Đầy Đủ ";
    if (!id) {
      isProceed = false;
      errorMessage += " Username";
    }
    if (!name) {
      isProceed = false;
      errorMessage += " Fullname";
    }
    if (!password) {
      isProceed = false;
      errorMessage += " Password";
    }
    if (!email) {
      isProceed = false;
      errorMessage += " Email";
    }

    if (!isProceed) {
      setErrorMessage(errorMessage);
    } else {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        isProceed = false;
        setErrorMessage("Vui Lòng Nhập Email Hợp Lệ");
      }
    }
    return isProceed;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regObj = { id, name, password, email };
    if (isValidate()) {
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered Successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="justify-content-center align-content-center">
        <div className="container-xxl col-6 mt-5">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              <div className="card">
                <div className="card-body">
                  {/* <h4 className="mb-2">Adventure starts here 🚀</h4> */}
                  <p className="text-center w-100" style={{ fontSize: "24px" }}>
                    {" "}
                    {/* Added style for font size */}
                    Register
                  </p>
                  <p className="text-center w-100">
                    Make your app management easy and fun!
                  </p>
                  {errorMessage && (
                    <div className="alert alert-danger mt-2" role="alert">
{errorMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="············"
                          aria-describedby="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          className="input-group-text cursor-pointer"
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <i className="bi bi-eye"></i>
                          ) : (
                            <i className="bi bi-eye-slash"></i>
                          )}
                        </span>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={name}
                          placeholder="Enter your username"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="terms-conditions"
                          name="terms"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="terms-conditions"
                        >
                          I Agree To
                          <a href="javascript:void(0);">
                            Privacy Policy &amp; Terms
                          </a>
                        </label>
                      </div>
                    </div>
                    {/* <button className="btn btn-primary d-grid w-100">
                        <a href="/admin"> Sign Up </a>
                      </button> */}
                    <button
                      type="submit"
                      className="btn btn-primary d-grid w-100"
                    >
                      Register
                    </button>{" "}
                  </form>
                  <p className="text-center mt-2">
                    <Link
                      className="btn btn-success d-flex justify-content-center align-items-center"
                      to={"/login"}
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;