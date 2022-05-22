import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../helpers/isEmpty";
import { getAllParishes } from "../../redux/actions/parish";

const ParishTable = () => {
  const { parishes } = useSelector((state) => state.parish);
  const dispatch = useDispatch();
  // let limit = 50;
  const [state] = useState({
    currentPage: 1,
  });

  useEffect(() => {
    dispatch(getAllParishes());
  }, []);
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Nom de la paroisse</th>
            <th>Contact</th>
            <th>Nom du Berger</th>
            <th>Quartier</th>
            <th>Ville</th>
            <th>Province</th>
          </tr>
        </thead>

        <tbody>
          {!isEmpty(parishes) &&
            parishes.map((parish) => (
              <tr>
                <td data-label="parish-name">{parish.parish_name}</td>
                <td data-label="parish-contact">{parish.parish_contact}</td>
                <td data-label="shepherd-name">{parish.full_name}</td>
                <td data-label="parish-street">{parish.street}</td>
                <td data-label="parish-city">{parish.city}</td>
                <td data-label="parish-province">{parish.province}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParishTable;
