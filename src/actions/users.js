// import package
import axios from "axios";

// import lib
import config from "../lib/config";


export const userLogin = async (data) => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/login`,
      data,
    });

    localStorage.setItem("user_token", respData.data.result.token);
    localStorage.setItem("name", respData.data.result.name);
    localStorage.setItem("email", respData.data.result.email);
    localStorage.setItem("profile", respData.data.result.profile);

    return {
      loading: false,
      result: respData.data.result,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const userFirstLogin = async () => {
  try {
    let respData = await axios({
      method: "post",
      url: `${config.API}/loginfirst`,

    });

    localStorage.setItem("user_token", respData.data.result.token);
    localStorage.setItem("name", respData.data.result.name);
    localStorage.setItem("email", respData.data.result.email);
    localStorage.setItem("profile", respData.data.result.profile);

    return {
      loading: false,
      result: respData.data.result,
    };
  } catch (err) {

    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

export const userList = async () => {
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/users`,
      headers: {
        Authorization: localStorage.user_token,
      },
    });

    return {
      success: true,
      loading: false,
      userdata: respData.data.data,
    };
  } catch (err) {
    return {
      loading: false,
      success: false,
    };
  }
};

export const logout = (history) => {
  localStorage.removeItem("user_token");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
};


export const createUser = async (data) => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("name", data.name);
    bodyFormData.append("email", data.email + "@email.com");
    bodyFormData.append("phonenumber", data.mobilenumber);
    bodyFormData.append("Photofile", data.profileimage);
    bodyFormData.append("password", data.password);
    let respData = await axios({
      method: "post",
      url: `${config.API}/register`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: bodyFormData,
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};




export const sentEmails = async () => {
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/email/send`,
      headers: {
        Authorization: localStorage.user_token,
      },
    });

    return {
      success: true,
      loading: false,
      userdata: respData.data.data,
    };
  } catch (err) {
    return {
      loading: false,
      success: false,
    };
  }
};

export const inbox = async () => {
  try {
    let respData = await axios({
      method: "get",
      url: `${config.API}/email/inbox`,
      headers: {
        Authorization: localStorage.user_token,
      },
    });

    return {
      success: true,
      loading: false,
      userdata: respData.data.data,
    };
  } catch (err) {

    return {
      loading: false,
      success: false,
    };
  }
};

export const mailDetail = async (id) => {
  try {

    let respData = await axios({
      method: "get",
      url: `${config.API}/email/` + id,
      headers: {
        Authorization: localStorage.user_token,
      },
    });

    return {
      success: true,
      loading: false,
      userdata: respData.data.data,
    };
  } catch (err) {

    return {
      loading: false,
      success: false,
    };
  }
};

export const sendMail = async (data) => {
  try {

    let respData = await axios({
      method: "post",
      url: `${config.API}/email/`,
      data: data,
      headers: {
        Authorization: localStorage.user_token,
      },
    });
    return {
      loading: false,
    };
  } catch (err) {
    return {
      loading: false,
      error: err.response.data.errors,
    };
  }
};

