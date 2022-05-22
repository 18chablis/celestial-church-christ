import React from "react";
import Modal from "../components/Modal";
import useModal from "../helpers/useModal";
import "../styles/table.css";

const Anointment = () => {
  const { isShowing, toggle } = useModal();

  async function handleSubmit(e) {}

  return (
    <div className="anointment">
      <h2 style={{ textAlign: "center" }}>Onction</h2>
      <div className="flex-row space-between p-20 pb-20 pt-20">
        <button onClick={toggle} className="btn">
          Ajouter onction
        </button>
      </div>
      <div className="table-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <th>Nom du fidele</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Grade actuel</th>
              <th>Grade demand&eacute;</th>
              <th>Nom de la paroisse</th>
              <th>Nom du berger</th>
            </thead>

            <tbody>
              <tr>
                <td data-label="name">Ken Griffey Jr.</td>
                <td data-label="war">83.8</td>
                <td data-label="ba">.284</td>
                <td data-label="obp">.370</td>
                <td data-label="obp">.370</td>
              </tr>
              <tr>
                <td data-label="name">Ken Griffey Jr.</td>
                <td data-label="war">83.8</td>
                <td data-label="ba">.284</td>
                <td data-label="obp">.370</td>
                <td data-label="obp">.370</td>
              </tr>

              <tr>
                <td data-label="name">Derek Jeter</td>
                <td data-label="war">71.3</td>
                <td data-label="ba">.310</td>
                <td data-label="obp">.377</td>
                <td data-label="obp">.377</td>
              </tr>
              <tr>
                <td data-label="name">Derek Jeter</td>
                <td data-label="war">71.3</td>
                <td data-label="ba">.310</td>
                <td data-label="obp">.377</td>
                <td data-label="obp">.377</td>
              </tr>
              <tr>
                <td data-label="name">Derek Jeter</td>
                <td data-label="war">71.3</td>
                <td data-label="ba">.310</td>
                <td data-label="obp">.377</td>
                <td data-label="obp">.377</td>
              </tr>
              <tr>
                <td data-label="name">Derek Jeter</td>
                <td data-label="war">71.3</td>
                <td data-label="ba">.310</td>
                <td data-label="obp">.377</td>
                <td data-label="obp">.377</td>
              </tr>

              <tr>
                <td data-label="name">Cal Ripken Jr.</td>
                <td data-label="war">95.9</td>
                <td data-label="ba">.276</td>
                <td data-label="obp">.340</td>
                <td data-label="obp">.340</td>
              </tr>

              <tr>
                <td data-label="name">Darryl Strawberry</td>
                <td data-label="war">42.2</td>
                <td data-label="ba">.259</td>
                <td data-label="obp">.357</td>
                <td data-label="obp">.357</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal isShowing={isShowing} hide={toggle}>
        <form onSubmit={handleSubmit} className="login">
          <input type="text" placeholder="nom complet" />
          <input type="number" placeholder="21" />
          <input type="text" placeholder="grade actuel" list="grade" />
          <datalist id="grade">
            <option>Dehoto</option>
          </datalist>
          <input type="text" placeholder="grade propose" list="grade-propose" />
          <datalist id="grade-propose">
            <option>Leader</option>
          </datalist>
          <input type="text" placeholder="prix d'onction" />
          <input type="date" placeholder="date onction" />
          <input type="time" placeholder="heure d'onction" />
          <input type="text" placeholder="lieu de prise d'onction" />
          <input type="file" />
          <input type="submit" value="Ajouter" />
        </form>
      </Modal>
    </div>
  );
};

export default Anointment;
