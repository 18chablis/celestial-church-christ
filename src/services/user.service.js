import axios from "axios";

class UserService {
  register(username, email, password, role) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/user-registration`,
      {
        username,
        email,
        password,
        role,
      }
    );
  }
}

export default new UserService();
