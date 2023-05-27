import { CButton, CCard, CCardBody, CCol, CImg, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CLabel, CRow } from '@coreui/react';
import React, { useEffect, useState } from "react";
import SuccessError from '../common/SuccessError';
import $ from "jquery";

const LoginForm = (props) => {
  let { loginClick, passwordChange, password, userCodeChange, userCode, success, error } = props;
  const [zoomSize, setZoomSize] = useState(
    Math.round(window.devicePixelRatio * 100)
  ); //browser zoom level

  useEffect(() => {
    $(window).resize(function () {
      setZoomSize(Math.round(window.devicePixelRatio * 100));
    });
  }, []);

  const keyDownHandler = (e) => {
    if (e.key == "Enter") {
      loginClick();
      e.preventDefault();
    }
  };

  return (
    <>
      {zoomSize < 150 && (
        <div
          className="min-vh-100  flex-row align-items-center login-bg"
        >
          <CRow>
            <CCol lg="3"></CCol>
            <CCol lg="6">
              <CCard className="login" style={{ marginTop: "100px" }}
              >
                <CCardBody>

                  <CRow alignHorizontal='center'>
                    <CImg src='./image/main-logo.png' width={150} height={150}></CImg>
                  </CRow>
                  <CRow alignHorizontal='center' className="mb-3">
                    <h3 className='login-title'>Registration System</h3>
                  </CRow>
                  <SuccessError success={success} error={error} />
                  <CRow className="mt-4 align-items-center">
                    <CCol lg="4"><CLabel className="form-label">User Code</CLabel></CCol>
                    <CCol lg="8">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CImg src='./image/user.png' width={20} height={20}></CImg>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput className="login-input" placeholder='Enter User Code' type='text'
                          autoFocus value={userCode} onChange={userCodeChange} onKeyDown={keyDownHandler}
                        ></CInput>
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <br></br>
                  <br></br>
                  <CRow className="align-items-center">
                    <CCol lg="4"><CLabel className="form-label">Password</CLabel></CCol>
                    <CCol lg="8">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CImg src='./image/password.png' width={20} height={20}></CImg>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput className="login-input" placeholder='Enter Password' type='password'
                          value={password} onChange={passwordChange} onKeyDown={keyDownHandler}
                        ></CInput>
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <br></br>
                  <br></br>
                  <CRow alignHorizontal='center' className="mb-4">
                    <CButton id="login" className='form-btn login-btn'
                      onClick={loginClick}
                    >Login</CButton>
                  </CRow>


                </CCardBody>
              </CCard>

            </CCol>

            <CCol lg="3"></CCol>
          </CRow>
        </div>
      )}

      {zoomSize > 149 && (
        <div className="login-bg-mobile">
          <br></br>
          <br></br>
          <h2 style={{ textAlign: "center", fontWeight: "bold", color: "#feec72" }}>
            Registration System
          </h2>

          <CRow style={{ justifyContent: "center" }}>
            <CImg src={"/image/main-logo.png"} width={200}></CImg>
          </CRow>

          <CRow lg="12" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
            <CCol lg="3"></CCol>
            <CCol lg="6">
              <br></br>
              <SuccessError success={success} error={error} />
              <label
                style={{
                  color: "#feec72",
                  fontSize: "16px",
                  justifyContent: "center",
                }}
              >
                User Code
              </label>
              <br></br>
              <CInput type="text" value={userCode} className="input-field-blue-background" onChange={userCodeChange} onKeyDown={keyDownHandler} />
              <br></br>
              <label
                style={{
                  color: "#feec72",
                  fontSize: "16px",
                  justifyContent: "center",
                }}
              >
                Password
              </label>
              <br></br>
              <CInput type="password" value={password} className="input-field-blue-background" onChange={passwordChange} onKeyDown={keyDownHandler} />
              <br></br>
            </CCol>

            <CCol lg="3">

            </CCol>
          </CRow>
          <br></br>
          <CRow
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              justifyContent: "center",
            }}
          >
            <CRow alignHorizontal='center' className="mb-4">
              <CButton id="login" className='form-btn login-btn'
                onClick={loginClick}
              >Login</CButton>
            </CRow>
          </CRow>
          <CRow style={{ height: "100px" }}>&nbsp;</CRow>
        </div>
      )}
    </>
  )
}

export default LoginForm
