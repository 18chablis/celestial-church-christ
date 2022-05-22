import React, { Suspense, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import ShepherdTable from "../components/tables/ShepherdTable";
import useModal from "../helpers/useModal";
import "../styles/table.css";
import "../styles/form.css";
import "../styles/shepherd.css";
import { useNavigate } from "react-router-dom";
import { gabonCity, gabonProvince, shepherdRank } from "../helpers/optionData";
import { useDispatch } from "react-redux";
import { BsChevronRight } from "react-icons/bs";
import { saveShepherd, getAllShepherds } from "../redux/actions/shepherd";
import { FormattedMessage } from "react-intl";

const Shepherd = () => {
  const { isShowing, toggle } = useModal();
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [age, setAge] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [shepherd_rank, setShepherdRank] = useState("");
  const [disable, setDisable] = useState(false);
  const [hide, setHide] = useState(false);

  const dispatch = useDispatch();
  function toggleDropDown() {
    setHide(!hide);
  }
  let role = "shepherd";
  let country = "Gabon";
  let item = {
    full_name,
    phone,
    email,
    age,
    province,
    city,
    shepherd_rank,
    street,
    role,
    country,
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!full_name || !phone || !shepherd_rank) {
    } else {
      await dispatch(saveShepherd(item));
      setFullName("");
      setStreet("");
      setAge("");
      setCity("");
      setEmail("");
      setPhone("");
      setProvince("");
      setShepherdRank("");
      dispatch(getAllShepherds());
    }
    setTimeout(function () {
      // dispatch(clearMessage());
    }, 5000);
  };

  const sortByCity = () => {};

  const sortByRank = () => {};
  return (
    <div className="shepherd">
      <h2 style={{ textAlign: "center" }}>
        <FormattedMessage id="shepherd" defaultMessage="Shepherd" />
      </h2>
      <div className="flex-row sp-between p-20 pb-20 pt-20">
        <button onClick={toggle} className="btn">
          <FormattedMessage id="btn_add_shepherd" />
        </button>
        <button className="btn" onClick={toggleDropDown}>
          filtrer par{" "}
          <BsChevronRight style={{ position: "absolute", marginTop: "2px" }} />
          <div
            style={{
              position: "absolute",
              minWidth: "80px",
              borderRadius: "14px",
              display: hide ? "block" : "none",
              background: "#37a69b",
              zIndex: "9",
              marginTop: "10px",
            }}
          >
            <ul>
              <li onClick={sortByRank}>Grade</li>
              <li onClick={sortByCity}>Ville</li>
            </ul>
          </div>
        </button>
        <button className="btn" onClick={() => navigate(-1)}>
          <FormattedMessage id="go_back" />
        </button>
      </div>
      <hr
        style={{
          width: "100%",
          border: "0.02px solid gray",
          marginLeft: "20px",
        }}
      />
      <Suspense fallback={<div>Loading Table</div>}>
        <ShepherdTable />
      </Suspense>
      <div className="flex-row">
        <span>
          Total: <span>54</span>
        </span>
      </div>
      <Modal isShowing={isShowing} hide={toggle}>
        <form onSubmit={handleSubmit} className="parish_form">
          <h1>Ajouter Berger</h1>
          <div className="input-group">
            <input
              type="text"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              className="input"
              placeholder="Nom complet du Berger"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input"
              placeholder="Numero de Telephone"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Email adresse"
            />
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input"
              placeholder="Age"
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
              {gabonProvince.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
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
            <input
              type="text"
              value={shepherd_rank}
              onChange={(e) => setShepherdRank(e.target.value)}
              className="input"
              placeholder="choisir le grade"
              list="rank"
            />
            <datalist id="rank">
              {shepherdRank.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </datalist>
          </div>
          <input type="submit" value="Enregistrer" />
        </form>
      </Modal>
    </div>
  );
};

export default Shepherd;
