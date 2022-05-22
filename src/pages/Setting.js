import React from "react";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../lang/locales";

const Setting = (props) => {
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Français", code: LOCALES.FRENCH },
  ];
  return (
    <div>
      <h2>
        <FormattedMessage id="setting" />
      </h2>
      <FormattedMessage id="languages" />{" "}
      <select onChange={props.handleChange} value={props.currentLocale}>
        {languages.map(({ name, code }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Setting;
