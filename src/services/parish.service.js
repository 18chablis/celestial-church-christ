import axios from "axios";
class ParishService {
  // get service
  async getParishes() {
    const token = await localStorage.getItem("user-token");

    return axios.get(`${process.env.REACT_APP_API_URL}/api/v1/parishes`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  // post service
  async createParish(parishData) {
    const token = await localStorage.getItem("user-token");

    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/v1/parish`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      data: parishData,
    });
  }

  //   delete service
  async deleteParish(id) {
    const token = await localStorage.getItem("user-token");

    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/v1/parish/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
  }

  // get shepherd name service
  async getShepherdName() {
    const token = await localStorage.getItem("user-token");

    return axios.get(`${process.env.REACT_APP_API_URL}/api/v1/shepherd-name`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new ParishService();
