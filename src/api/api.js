import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: "https://reqres.in/api/users",
});

export const usersAPI = {
  getUsers(page = 1) {
    return instance.get("?page=" + page).then((response) => {
      return response.data;
    });
  },

  followUser(userId, param) {
    return instance.put("/" + userId, { job: param });
  },

  getProfile(userId) {
    console.warn("Obsolete method. Use profileAPI instead");
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get("/" + userId);
  },

  getStatus(userId) {
    return instance.get("/" + userId).then((response) => {
      return response.data.ad.company;
    });
  },

  updateStatus(userId, status) {
    return instance.put("/" + userId, { job: status }).then((response) => {
      return response.data.job;
    });
  },
};

export const authAPI = {
  login(email, password) {
    return axios.post("https://reqres.in/api/login", {
      // email: "eve.holt@reqres.in",
      // password: "cityslicka",
      email: email,
      password: password,
    });
  },
};
