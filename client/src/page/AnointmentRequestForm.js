import axios from "axios";
import React from "react";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../lang/locales";
import "../style/anointment-request.css";

const AnointmentRequestForm = (props) => {
  var config = {
    method: "get",
    url: "https://api.countrystatecity.in/v1/countries/IN/states/MH",
    headers: {
      "X-CSCAPI-KEY": "API_KEY",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Français", code: LOCALES.FRENCH },
  ];
  return (
    <div>
      <select onChange={props.handleChange} value={props.currentLocale}>
        {languages.map(({ name, code }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <div className="anointment_request">
        <div className="header">
          <div className="logo_container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/celelogo.jpg`}
              alt=""
              className="logo"
            />
          </div>
          <h2
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: "36px",
              color: "blueviolet",
            }}
          >
            <FormattedMessage id="anointmentRequestTitle" />
            <span className="right_box">
              <span className="star_required">*</span> ={" "}
              <FormattedMessage id="requiredInformation" />
            </span>
          </h2>
        </div>
        <div className="container">
          <section>
            <h4 className="title uppercase">
              <FormattedMessage id="fellowDetail" />
            </h4>
            <div className="form_container">
              <div className="inline_block">
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="firstName" />
                </label>
                <input type="text" placeholder="John " className="input" />
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="lastName" />
                </label>
                <input type="text" placeholder="Doe " className="input" />
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="phoneNumber" />
                </label>
                <input
                  type="text"
                  placeholder="5732903221 "
                  className="input"
                />
              </div>
              <div className="inline_block">
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="mailAddress" />
                </label>
                <input
                  type="text"
                  placeholder="johndoe@gmail.com "
                  className="input"
                />
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="country" />
                </label>
                <input
                  type="text"
                  placeholder="select the country "
                  className="input"
                  list="country"
                />
                <datalist id="country">
                  <option></option>
                </datalist>
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="stateProvince" />
                </label>
                <input
                  type="text"
                  placeholder="State or Province here "
                  className="input"
                />
              </div>
              <div className="inline_block">
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="city" />
                </label>
                <input
                  type="text"
                  placeholder="Home address here "
                  className="input"
                />
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="homeAddress" />
                </label>
                <input
                  type="text"
                  placeholder="Home address here "
                  className="input"
                />
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="photo" />
                </label>
                <input type="file" placeholder="choose a picture " />
              </div>
            </div>
          </section>
          <section>
            <h4 className="title uppercase">
              <FormattedMessage id="parishDetail" />
            </h4>
            <div className="form_container">
              <div className="inline_block">
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="parishName" />
                </label>
                <input
                  type="text"
                  placeholder="CCC Jordan Parish "
                  className="input"
                />
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="parishShepherd" />
                </label>
                <input
                  type="text"
                  placeholder="Peter Samuel Ojire "
                  className="input"
                />
              </div>
            </div>
          </section>
          <section>
            <h4 className="title uppercase">
              <FormattedMessage id="anointmentDetail" />
            </h4>
            <div className="form_container">
              <div className="inline_block">
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="currentRank" />
                </label>
                <input
                  type="text"
                  placeholder="Current rank here"
                  className="input"
                />
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="requestedRank" />
                </label>
                <input
                  type="text"
                  placeholder="Request rank here "
                  className="input"
                />
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="rankAmount" />
                </label>
                <input type="text" disabled style={{ width: "80px" }} />
              </div>
              <div className="inline_block">
                <label htmlFor="" className="uppercase">
                  <span className="star_required">*</span>
                  <FormattedMessage id="paymentMethod" />
                </label>
                <input
                  type="text"
                  placeholder="Current rank here"
                  className="input"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AnointmentRequestForm;
