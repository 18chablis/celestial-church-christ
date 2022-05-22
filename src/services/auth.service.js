import axios from "axios";

class AuthService {
  login(email, password) {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/user-login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user-token", response.data.token);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user-token");
  }

  register(username, email, password) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/user-registration`,
      {
        username,
        email,
        password,
      }
    );
  }
}

export default new AuthService();
