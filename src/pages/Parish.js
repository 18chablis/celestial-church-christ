import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import "../styles/table.css";
import "../styles/form.css";
import useModal from "../helpers/useModal";
import {
  getAllParishes,
  getNameOfShepherd,
  saveParish,
} from "../redux/actions/parish";
import { gabonCity, gabonProvince } from "../helpers/optionData";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
const ParishTable = lazy(() => import("../components/tables/ParishTable"));

const Parish = () => {
  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();
  const { shepherd_name } = useSelector((state) => state.parish);

  const [parish_name, setParishName] = useState("");
  const [full_name, setFullName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [parish_contact, setParishContact] = useState("");
  const [province, setProvince] = useState("");
  let country = "Gabon";
  let item = {
    parish_name,
    full_name,
    parish_contact,
    city,
    street,
    province,
    country,
  };
  useEffect(() => {
    dispatch(getNameOfShepherd());
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!parish_name) {
    } else {
      await dispatch(saveParish(item));
      setFullName("");
      setStreet("");
      setCity("");
      setParishContact("");
      setProvince("");
      setParishName("");
      dispatch(getAllParishes());
    }
    setTimeout(function () {
      // dispatch(clearMessage());
    }, 5000);
  };

  return (
    <div className="paroisse">
      <h2 style={{ textAlign: "center" }}>
        <FormattedMessage id="parish" defaultMessage="Parish" />
      </h2>
      <div className="flex-row sp-between p-20 pb-20 pt-20">
        <button onClick={toggle} className="btn">
          <FormattedMessage id="btn_add_parish" />
        </button>
        <button className="btn" onClick={() => navigate(-1)}>
          <FormattedMessage id="go_back" />
        </button>
      </div>
      <Suspense fallback={<div>Loading Table</div>}>
        <ParishTable />
      </Suspense>
      <Modal isShowing={isShowing} hide={toggle}>
        <form onSubmit={handleSubmit} className="parish_form">
          <h1>
            <FormattedMessage id="btn_add_parish" />
          </h1>
          <div className="input-group">
            <input
              type="text"
              placeholder="Nom de la paroisse"
              className="input"
              value={parish_name}
              onChange={(e) => setParishName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nom du berger"
              className="input"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              list="shepherd-name"
            />
            <datalist id="shepherd-name">
              {shepherd_name.map((option) => (
                <option key={option.full_name} value={option.full_name}>
                  {option.full_name}
                </option>
              ))}
            </datalist>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Contact telephonique"
              className="input"
              value={parish_contact}
              onChange={(e) => setParishContact(e.target.value)}
            />
            <input
              type="text"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="input"
              placeholder="province or state"
              list="province_state"
            />
            <datalist id="province_state">
              {/* {gabonProvince.map((option, index) => ( */}
              {/* <option key={index} value={option.value}> */}
              {/* {option.label} */}
              {/* </option> */}
              {/* ))} */}
            </datalist>
          </div>

          <div className="input-group">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input"
              placeholder="city department"
              list="city_department"
            />
            <datalist id="city_department">
              {gabonCity.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </datalist>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="input"
              placeholder="adresse"
            />
          </div>

          <input type="submit" value="Sauvegarder" />
        </form>
      </Modal>
    </div>
  );
};

export default Parish;
