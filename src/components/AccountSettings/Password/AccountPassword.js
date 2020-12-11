import React from 'react';
import { Link } from 'react-router-dom';

export default function AccountPassword(props) {
    return(
        <>
        <div class="div-block-63">
        <div class="account-info-mini-container custie">
          <div class="password-header">
            <h3 class="heading-5">Password</h3>
            <div class="text-block-42">Update your password.</div>
          </div>
          <div class="password-fields">
            <div class="div-block-62">
              <div class="text-block-12 header">Old Password</div>
              <div class="email-username-timezone-input-field pass">
                <div class="text-block-13 transp">arodriguezlebron@gmail.com</div>
              </div>
              <div class="text-block-12 header">New Password</div>
              <div class="email-username-timezone-input-field">
                <div class="text-block-13 transp">@cryptodog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/account">
        <div class="text-block-47">Save changes</div>
      </Link>
      </>
    )

}