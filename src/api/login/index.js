import fetch from "@/api/axios.js";

export const login = params => {
  return fetch({
    url: "/login/cellphone",
    method: "GET",
    params
  });
};

export const loginfunc = data => {
  return fetch({
    url: "/login/cellphone",
    method: "POST",
    data
  });
};
