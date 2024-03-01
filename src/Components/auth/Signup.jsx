import React from "react";
import Signphoto from "../../Assest/signup.png";
import signgoogle from "../../Assest/search.svg";
import signfacebook from "../../Assest/facebook.svg";
import "./style.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div>
        <div>
          <div className="parentSignup rr">
            <div className="signupImg">
              <img className="loginimages jk" src={Signphoto} alt="img" />
            </div>
            <div className="signupform">
              <div className="subsignupform">
                <form>
                  <h1>SignUp</h1>
                  <div className="forminput">
                    <div className="inputfont">
                      <svg
                        className="svgfont"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_120_2396)">
                          <path
                            d="M12 12C13.1867 12 14.3467 11.6481 15.3334 10.9888C16.3201 10.3295 17.0892 9.39246 17.5433 8.2961C17.9974 7.19975 18.1162 5.99335 17.8847 4.82946C17.6532 3.66557 17.0818 2.59648 16.2426 1.75736C15.4035 0.918247 14.3344 0.346802 13.1705 0.115291C12.0067 -0.11622 10.8003 0.00259972 9.7039 0.456725C8.60754 0.910851 7.67047 1.67989 7.01118 2.66658C6.35189 3.65328 6 4.81331 6 6C6.00159 7.59081 6.63424 9.11601 7.75911 10.2409C8.88399 11.3658 10.4092 11.9984 12 12ZM12 2C12.7911 2 13.5645 2.2346 14.2223 2.67412C14.8801 3.11365 15.3928 3.73836 15.6955 4.46927C15.9983 5.20017 16.0775 6.00444 15.9231 6.78036C15.7688 7.55629 15.3878 8.26902 14.8284 8.82843C14.269 9.38784 13.5563 9.7688 12.7804 9.92314C12.0044 10.0775 11.2002 9.99827 10.4693 9.69552C9.73836 9.39277 9.11365 8.88008 8.67412 8.22228C8.2346 7.56449 8 6.79113 8 6C8 4.93914 8.42143 3.92172 9.17157 3.17158C9.92172 2.42143 10.9391 2 12 2Z"
                            fill="#1B1C1D"
                          />
                          <path
                            d="M12 14C9.61386 14.0026 7.32622 14.9517 5.63896 16.639C3.95171 18.3262 3.00265 20.6139 3 23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24C4.26522 24 4.51957 23.8946 4.70711 23.7071C4.89464 23.5196 5 23.2652 5 23C5 21.1435 5.7375 19.363 7.05025 18.0503C8.36301 16.7375 10.1435 16 12 16C13.8565 16 15.637 16.7375 16.9497 18.0503C18.2625 19.363 19 21.1435 19 23C19 23.2652 19.1054 23.5196 19.2929 23.7071C19.4804 23.8946 19.7348 24 20 24C20.2652 24 20.5196 23.8946 20.7071 23.7071C20.8946 23.5196 21 23.2652 21 23C20.9974 20.6139 20.0483 18.3262 18.361 16.639C16.6738 14.9517 14.3861 14.0026 12 14Z"
                            fill="#1B1C1D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_120_2396">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="inputfont">
                      <svg
                        className="svgfont"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_120_2396)">
                          <path
                            d="M12 12C13.1867 12 14.3467 11.6481 15.3334 10.9888C16.3201 10.3295 17.0892 9.39246 17.5433 8.2961C17.9974 7.19975 18.1162 5.99335 17.8847 4.82946C17.6532 3.66557 17.0818 2.59648 16.2426 1.75736C15.4035 0.918247 14.3344 0.346802 13.1705 0.115291C12.0067 -0.11622 10.8003 0.00259972 9.7039 0.456725C8.60754 0.910851 7.67047 1.67989 7.01118 2.66658C6.35189 3.65328 6 4.81331 6 6C6.00159 7.59081 6.63424 9.11601 7.75911 10.2409C8.88399 11.3658 10.4092 11.9984 12 12ZM12 2C12.7911 2 13.5645 2.2346 14.2223 2.67412C14.8801 3.11365 15.3928 3.73836 15.6955 4.46927C15.9983 5.20017 16.0775 6.00444 15.9231 6.78036C15.7688 7.55629 15.3878 8.26902 14.8284 8.82843C14.269 9.38784 13.5563 9.7688 12.7804 9.92314C12.0044 10.0775 11.2002 9.99827 10.4693 9.69552C9.73836 9.39277 9.11365 8.88008 8.67412 8.22228C8.2346 7.56449 8 6.79113 8 6C8 4.93914 8.42143 3.92172 9.17157 3.17158C9.92172 2.42143 10.9391 2 12 2Z"
                            fill="#1B1C1D"
                          />
                          <path
                            d="M12 14C9.61386 14.0026 7.32622 14.9517 5.63896 16.639C3.95171 18.3262 3.00265 20.6139 3 23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24C4.26522 24 4.51957 23.8946 4.70711 23.7071C4.89464 23.5196 5 23.2652 5 23C5 21.1435 5.7375 19.363 7.05025 18.0503C8.36301 16.7375 10.1435 16 12 16C13.8565 16 15.637 16.7375 16.9497 18.0503C18.2625 19.363 19 21.1435 19 23C19 23.2652 19.1054 23.5196 19.2929 23.7071C19.4804 23.8946 19.7348 24 20 24C20.2652 24 20.5196 23.8946 20.7071 23.7071C20.8946 23.5196 21 23.2652 21 23C20.9974 20.6139 20.0483 18.3262 18.361 16.639C16.6738 14.9517 14.3861 14.0026 12 14Z"
                            fill="#1B1C1D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_120_2396">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="inputfont">
                      <svg
                        className="svgfont sbh"
                        width="24"
                        height="24"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM5 2H19C19.5988 2.00118 20.1835 2.18151 20.679 2.5178C21.1744 2.85409 21.5579 3.33095 21.78 3.887L14.122 11.546C13.5584 12.1073 12.7954 12.4225 12 12.4225C11.2046 12.4225 10.4416 12.1073 9.878 11.546L2.22 3.887C2.44215 3.33095 2.82561 2.85409 3.32105 2.5178C3.81648 2.18151 4.40121 2.00118 5 2ZM19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7957 2 17V6.5L8.464 12.96C9.40263 13.8963 10.6743 14.422 12 14.422C13.3257 14.422 14.5974 13.8963 15.536 12.96L22 6.5V17C22 17.7957 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20Z"
                          fill="#1B1C1D"
                        />
                      </svg>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="inputfont">
                      <svg className="svgfont" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 8.424V7C17 5.14348 16.2625 3.36301 14.9497 2.05025C13.637 0.737498 11.8565 0 10 0C8.14348 0 6.36301 0.737498 5.05025 2.05025C3.7375 3.36301 3 5.14348 3 7V8.424C2.10936 8.81271 1.35129 9.45252 0.818499 10.2652C0.285705 11.0779 0.00127838 12.0282 0 13V19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V13C19.9987 12.0282 19.7143 11.0779 19.1815 10.2652C18.6487 9.45252 17.8906 8.81271 17 8.424ZM5 7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7V8H5V7ZM18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V13C2 12.2044 2.31607 11.4413 2.87868 10.8787C3.44129 10.3161 4.20435 10 5 10H15C15.7956 10 16.5587 10.3161 17.1213 10.8787C17.6839 11.4413 18 12.2044 18 13V19Z" fill="#1B1C1D" />
                        <path d="M10 14C9.73478 14 9.48043 14.1054 9.29289 14.2929C9.10536 14.4804 9 14.7348 9 15V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V15C11 14.7348 10.8946 14.4804 10.7071 14.2929C10.5196 14.1054 10.2652 14 10 14Z" fill="#1B1C1D" />
                      </svg>

                      <input type="Password" placeholder="password" />
                    </div>
                    <div className="inputfont">
                      <svg className="svgfont" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 8.424V7C17 5.14348 16.2625 3.36301 14.9497 2.05025C13.637 0.737498 11.8565 0 10 0C8.14348 0 6.36301 0.737498 5.05025 2.05025C3.7375 3.36301 3 5.14348 3 7V8.424C2.10936 8.81271 1.35129 9.45252 0.818499 10.2652C0.285705 11.0779 0.00127838 12.0282 0 13V19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V13C19.9987 12.0282 19.7143 11.0779 19.1815 10.2652C18.6487 9.45252 17.8906 8.81271 17 8.424ZM5 7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7V8H5V7ZM18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V13C2 12.2044 2.31607 11.4413 2.87868 10.8787C3.44129 10.3161 4.20435 10 5 10H15C15.7956 10 16.5587 10.3161 17.1213 10.8787C17.6839 11.4413 18 12.2044 18 13V19Z" fill="#1B1C1D" />
                        <path d="M10 14C9.73478 14 9.48043 14.1054 9.29289 14.2929C9.10536 14.4804 9 14.7348 9 15V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V15C11 14.7348 10.8946 14.4804 10.7071 14.2929C10.5196 14.1054 10.2652 14 10 14Z" fill="#1B1C1D" />
                      </svg>
                      <input type="Password" placeholder="Confirm Password" />
                    </div>
                    {/* <div className="achortag">
                      <a href=""> Forget Password </a>
                    </div> */}

                    <br></br>
                    <NavLink to="/login"><button>Sign Up</button></NavLink>
                    <p className="termcondition">
                      <a href="">Terms</a> of Use and
                      <a href=""> privacy Policy </a>
                    </p>
                    <div className="horizontal">
                      <div className="para">
                        <hr />
                      </div>
                      <div className="paraor">
                        {" "}
                        <p className="paraor_or">OR</p>{" "}
                      </div>
                      <div className="para">
                        {" "}
                        <hr />
                      </div>
                      {/* <hr />
                         <p>OR</p> 
                        <hr /> */}
                    </div>
                    <div className="formgoogle">
                      <div className="facebook">
                        <img src={signfacebook} alt="" />
                      </div>
                      <div className="facebook">
                        <img src={signgoogle} alt="" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
