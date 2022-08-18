import React from 'react';

const ReferralForm = () => {
  // Remove referral form not neccesary
  return (
    <>
      <body>
        <form className="pt-5 pb-5 pr-5">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input className="input" type="text" placeholder="Name" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="email"
                    placeholder="Email"
                    value=""
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Phone Number</label>
            </div>
            <div className="field-body">
              <div className="field is-expanded">
                <div className="field has-addons">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="tel"
                      placeholder="Phone Number"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Do you have a disability?</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="member" />
                    Yes
                  </label>
                  <label className="radio">
                    <input type="radio" name="member" />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Mediator</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <div className="select is-fullwidth">
                    <select>
                      <option>Kate Brown</option>
                      <option>Kathleen Straub </option>
                      <option>Jules Waring</option>
                      <option>Caroline Dunne</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Local Authority Involved?</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="member" />
                    Yes
                  </label>
                  <label className="radio">
                    <input type="radio" name="member" />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">
                Current contact arrangements between child/children and
                non-resident parent:
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input "
                    type="text"
                    placeholder="e.g. Child is living with me only"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              {/* <!-- Left empty for spacing --> */}
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-primary">Send message</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </body>
    </>
  );
};

export default ReferralForm;
