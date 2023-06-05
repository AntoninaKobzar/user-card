import axios from "axios";

axios.defaults.baseURL = "https://6471a01b6a9370d5a41a7a8f.mockapi.io/";
const limit = 3;
const searchParams = new URLSearchParams({
  limit,
});

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios.get(`/users?${searchParams}&page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (userId, userFollowers) => {
  try {
    const resp = await axios.put(`/users/:id/${userId}`, {
      followers: userFollowers,
    });
    const data = resp.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
