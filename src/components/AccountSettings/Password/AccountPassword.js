import React from 'react';
import { Link } from 'react-router-dom';

export default function AccountPassword(props) {
    return(
        <>
        <div className="div-block-63">
        <div className="account-info-mini-container custie">
          <div className="password-header">
            <h3 className="heading-5">Password</h3>
            <div className="text-block-42">Update your password.</div>
          </div>
          <div className="password-fields">
            <div className="div-block-62">
              <div className="text-block-12 header">Old Password</div>
              <div className="email-username-timezone-input-field pass">
                <div className="text-block-13 transp">arodriguezlebron@gmail.com</div>
              </div>
              <div className="text-block-12 header">New Password</div>
              <div className="email-username-timezone-input-field">
                <div className="text-block-13 transp">@cryptodog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/account">
        <div className="text-block-47">Save changes</div>
      </Link>
      </>
    )

}