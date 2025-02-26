import axios from "axios";

export const refreshToken = async (token: string) => {
  const refresh_token = await axios.get(`${process.env.INSTAGRAM_BASE_URL}`);
};
