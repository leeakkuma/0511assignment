//signup.jsx

import React, { useState } from "react";
import "./signup.css";

export default function SIGNUP() {
    const [id, setId] = useState(""); // id: 초기값, setId: id값 변경 함수, "": 초기값(빈 문자열)
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const[email, setEmail] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    console.log("ID:", id, "PASSWORD:", password, "NAME:", name, "PHONE:", phone, "EMAIL:", email); // 입력된 id와 password, name, phone, email을 콘솔에 출력
  };
  
  return (
    <div className="signup-wrapper">
      <div className="signup-page">
        <h1 className="signup-title">SIGN UP</h1>
        <form className="signup-form-wrapper" onSubmit={handleSubmit}>
          <div className="signup-form">
            <div className="signup-id-password-name-phone-email">
              <label className="signup-label" htmlFor="id">
                ID
              </label>
              <input
                id="id"
                type="text"
                className="signup-input"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className="signup-id-password-name-phone-email">
              <label className="signup-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                className="signup-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="signup-id-password-name-phone-email">
                <label className="signup-label" htmlFor="name">
                    NAME
                </label>
                <input
                 id="name"
                 type="name"
                 className="signup-input"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 />
            </div>
            <div className="signup-id-password-name-phone-email">
                <label className="signup-label" htmlFor="phone">
                    PHONE
                </label>
                <input
                 id="phone"
                 type="tel"
                 className="signup-input"
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                 />
            </div>
            <div className="signup-id-password-name-phone-email">
                <label className="signup-label" htmlFor="email">
                    EMAIL
                </label>
                <input
                 id="email"
                 type="email"
                 className="signup-input"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
            </div>
          </div>

          <button type="submit" className="signup-button">
            CONFIRM
          </button>
        </form>
      </div>
    </div>
  );
}
