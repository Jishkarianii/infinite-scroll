import axios from "axios";

const base_URL: string =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";

export const getUserList = async (page: number, size: number) => {
  const res = await axios.get(`${base_URL}/user/${page}/${size}`);
  return res.data;
};

export const getUserById = async (id: string | undefined) => {
  const res = await axios.get(`${base_URL}/user/${id}`);
  return res.data;
};

export const getUserFriends = async (id: string | undefined, page: number, size: number) => {
  const res = await axios.get(`${base_URL}/user/${id}/friends/${page}/${size}`);
  return res.data;
};
