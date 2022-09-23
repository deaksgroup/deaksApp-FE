import axios from "axios";

export const getUsersList = (params) => {
  return axios.get("/users", {
    params,
  });
};

export const getUsersCount = (params) => {
  return axios.get("/usersCount", {
    params,
  });
};

export const getUsersInfo = (id) => {
  return axios.get("/getUserInfo", {
    params: {
      userId: id,
    },
  });
};
export const getUpdateUserInfo = (params) => {
  return axios.patch("/updateUserInfo", {
    params,
  });
};

export const deleteUserId = (userId) => {
  return axios.post("/deleteUserId", { userId });
};

export const activateUser = (data) => {
  return axios.patch("/activateUser", data);
};
