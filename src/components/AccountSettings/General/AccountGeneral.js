import React from 'react';

export default function AccountGeneral(props) {
    return(
        <div className="div-block-63">
        <div className="accordion_wrapper">
            <div data-w-id="5a82b320-340f-a4b8-51d3-c96e78fca4e1" className="accordion_trigger">
            <div className="text-block-54">Account Settings</div>
            <img src="../images/chevron-down.png" loading="lazy" width="24" alt=""/></div>
            <div className="accordion-content">
            <a href="../account/password.html" className="div-block-96 w-inline-block">
                <div className="text-block-56">Password</div>
            </a>
            <a href="../account/usage.html" className="div-block-96 w-inline-block">
                <div className="text-block-56">Usage</div>
            </a>
            <a href="../account/billing.html" className="div-block-96 w-inline-block">
                <div className="text-block-56">Billing</div>
            </a>
            </div>
        </div>
        <div className="w-layout-grid settings-card-header customgrid">
            <div className="left-side">
                <img src="../images/dog.png" loading="lazy" width="56" alt="" className="image-36"/>
            <div className="div-block-88">
                <div className="username">@cryptodog</div><a href="#" className="change-avatar-button">Change avatar</a></div>
            </div>
            <div id="w-node-71d8e03331f9-cf6f7230" className="div-block-59">
            <div className="tier-display">
                <div className="text-block-14 gfdgfsfdg">Hobbyist</div>
            </div>
            </div>
        </div>
        <div className="account-info-mini-container">
            <div className="item_trigger">
            <h3 className="heading-5">Account Information</h3>
            <div className="text-block-42">Update your email address, username and time zone.</div>
            </div>
            <div className="accordion_item_content">
            <div className="div-block-62">
                <div className="text-block-12 header">Email</div>
                <div className="email-username-timezone-input-field">
                <div className="text-block-13">arodriguezlebron@gmail.com</div>
                </div>
                <div className="text-block-12 header">Username</div>
                <div className="email-username-timezone-input-field">
                <div className="text-block-13">@cryptodog</div>
                </div>
            </div>
            </div>
        </div>
        <div className="account-info-mini-container">
            <div className="text-block-12 header">Time zone</div>
            <div className="text-block-12 fddasfd">Change your time zone depending on the area where you would like.</div>
            <div className="email-username-timezone-input-field custombox">
            <div className="text-block-13 timezone">(GMT-5:00) Eastern Time</div>
            <img src="../images/chevron-down.png" loading="lazy" width="20" alt=""/></div>
            <div className="text-block-12 header ddfsafd">Account Changes</div>
        </div>
        <div className="w-layout-grid grid-27">
            <div>
            <h3 className="heading-5 close">Close Account</h3>
            <div className="text-block-44">Delete your account and account data</div>
            </div>
            <div className="div-block-91">
            <a href="#" className="delete_account_button w-inline-block">
                <div className="text-block-45">Close Account</div>
            </a>
            </div>
        </div>
        <div className="account-info-mini-container delete"></div>
        <a href="#">
            <div className="text-block-47">Save changes</div>
        </a>
        </div>
      )
}
    