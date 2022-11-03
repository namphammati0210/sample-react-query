import axios from "axios";

const getAllUsers = async () => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/users`
    );
    return result.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: UserServices.js ~ line 6 ~ getAllUsers ~ error",
      error
    );
  }
};

const createUser = async (user) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/user`,
      user
    );
    return result.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: UserServices.js ~ line 23 ~ createUser ~ error",
      error
    );
  }
};

const getUser = async (id) => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/user/${id}`
    );
    return result.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: UserServices.js ~ line 34 ~ getUser ~ error",
      error
    );
  }
};

export default { getAllUsers, createUser, getUser };
