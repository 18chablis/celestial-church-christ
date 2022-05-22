import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../helpers/isEmpty";
import useModal from "../../helpers/useModal";
import {
  deleteShepherd,
  getAllShepherds,
  getShepherd,
} from "../../redux/actions/shepherd";
import Modal from "../Modal";

const ShepherdTable = () => {
  const { isShowing, toggle } = useModal();
  const { shepherds, shepherd } = useSelector((state) => state.shepherd);
  const [edit, setEdit] = useState(false);
  // const [shepherd_id, setShepherdId] = useState("");
  const dispatch = useDispatch();
  // let limit = 50;
  const [state] = useState({
    currentPage: 1,
  });

  const editable = () => {
    setEdit(!edit);
  };
  useEffect(() => {
    dispatch(getAllShepherds());
  }, []);

  const viewShepherd = async (id) => {
    await dispatch(getShepherd(id));
    // setShepherdId(id);
    toggle();
  };

  const delShepherd = async (id) => {
    if (window.confirm("Desirez vous vraiment supprimer le berger?")) {
      toggle();
      await dispatch(deleteShepherd(id));
      dispatch(getAllShepherds());
    }
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Nom Complet</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Grade</th>
            <th>Ville</th>
            <th>Province</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {!isEmpty(shepherds) &&
            shepherds.map((shepherd, index) => (
              <tr
                onClick={() => viewShepherd(shepherd.id)}
                key={index}
                style={{ cursor: "pointer" }}
              >
                <td data-label="full_name">{shepherd.person.full_name}</td>
                <td data-label="phone">{shepherd.phone}</td>
                <td data-label="email">{shepherd.person.email}</td>
                <td data-label="shepherd-rank">{shepherd.shepherd_rank}</td>
                <td data-label="city">{shepherd.address.city}</td>
                <td data-label="province">{shepherd.address.province}</td>
                <td data-label="role">{shepherd.person.role}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal isShowing={isShowing} hide={toggle}>
        <div className="flex-row right-side">
          <AiFillEdit
            color="yellow"
            style={{ margin: "2px 6px 10px 6px", cursor: "pointer" }}
            onClick={editable}
          />
          <BsTrash
            color="red"
            style={{ margin: "2px 12px 10px 12px", cursor: "pointer" }}
            onClick={() => delShepherd(shepherd.data.id)}
          />
        </div>
        <div style={{ padding: "20px" }}>
          <div className="flex-row mb-10">
            <label htmlFor="full_name" className="mr-20">
              Nom Complet :
            </label>
            {edit ? (
              <input placeholder="" className="input input-sm" />
            ) : (
              <p className="white-p">
                {!isEmpty(shepherd) && shepherd.data.person.full_name}
              </p>
            )}
          </div>
          <div className="flex-row mb-10">
            <label htmlFor="phone" className="mr-20">
              Telephone :
            </label>
            {edit ? (
              <input placeholder="" className="input input-sm" />
            ) : (
              <p className="white-p">
                {!isEmpty(shepherd) && shepherd.data.phone}
              </p>
            )}
          </div>
          <div className="flex-row mb-10">
            <label htmlFor="email" className="mr-20">
              Email adresse :
            </label>
            {edit ? (
              <input placeholder="" className="input input-sm" />
            ) : (
              <p className="white-p">
                {!isEmpty(shepherd) && shepherd.data.person.email}
              </p>
            )}
          </div>
          <div className="flex-row mb-10">
            <label htmlFor="grade" className="mr-20">
              Grade :
            </label>
            {edit ? (
              <input placeholder="" className="input input-sm" />
            ) : (
              <p className="white-p">
                {!isEmpty(shepherd) && shepherd.data.shepherd_rank}
              </p>
            )}
          </div>
          <div className="flex-row mb-10">
            <label htmlFor="city" className="mr-20">
              City :
            </label>
            {edit ? (
              <input placeholder="" className="input input-sm" />
            ) : (
              <p className="white-p">
                {!isEmpty(shepherd) && shepherd.data.address.city}
              </p>
            )}
          </div>
          <div className="flex-row mb-10">
            <label htmlFor="province" className="mr-20">
              Province :
            </label>
            {edit ? (
              <input placeholder="" className="input input-sm" />
            ) : (
              <p className="white-p">
                {!isEmpty(shepherd) && shepherd.data.address.province}
              </p>
            )}
          </div>
          {edit && (
            <div className="flex-row right-side">
              <input type="submit" value="Edit" className="btn" />
              <input
                type="submit"
                value="Cancel"
                className="btn cancel ml-10"
                onClick={editable}
              />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ShepherdTable;
