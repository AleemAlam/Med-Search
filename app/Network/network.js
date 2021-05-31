import axios from "axios";

export const searchMedicine = (page = 1, text) => {
  return axios.get(
    `https://aleemalam.pythonanywhere.com/api/medicine?page=${page}&search=${text}`
  );
};
