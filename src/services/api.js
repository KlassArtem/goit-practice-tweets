import axios from "axios";

const api = axios.create({
  baseURL: "https://64579fb71a4c152cf9864a8f.mockapi.io",
});

export const getAllUsers = async (page = 1) => {
  try {
    const { data } = await api.get("/test-users", {
      params: {
        page,
        limit: 12,
      },
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const followUser = async (id, followers) => {
  try {
    await api.put(`/test-users/${id}`, {
      followers,
      isFollowed: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export const unFollowUser = async (id, followers) => {
  try {
    await api.put(`/test-users/${id}`, {
      followers,
      isFollowed: false,
    });
  } catch (err) {
    console.error(err);
  }
};