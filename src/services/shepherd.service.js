import axios from "axios";
class ShepherdService {
  // get service
  async getShepherds() {
    const token = await localStorage.getItem("user-token");

    return axios.get(`${process.env.REACT_APP_API_URL}/api/v1/shepherds`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  async getShepherd(id) {
    const token = await localStorage.getItem("user-token");

    return axios.get(`${process.env.REACT_APP_API_URL}/api/v1/shepherd/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: id,
    });
  }
  // post service
  async createShepherd(shepherdData) {
    const token = await localStorage.getItem("user-token");

    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/v1/shepherd`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      data: shepherdData,
    });
  }

  //   delete service
  async deleteShepherd(id) {
    const token = await localStorage.getItem("user-token");

    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/v1/shepherd/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
  }
}

export default new ShepherdService();
