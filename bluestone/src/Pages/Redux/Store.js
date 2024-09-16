import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import Swal from "sweetalert2";

let initial = {
  isLogin: false,
  user: null,
  isError: false,
  isLoading: false,
};

const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        user: payload,
        isLogin: false,
        isLoading: false,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const fetchapi = (data) => (obj) => {
  data({ type: "LOADING" });
  fetch(`https://mock-server-app-3ssy.onrender.com/user?email=${obj.email}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      if (res[0].password == obj.password) {
        Swal.fire({
          title: "Login Succesfully...",
          showClass: {
            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
          },
          hideClass: {
            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
          },
        });
        data({ type: "SUCCESS", payload: res });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Unsuccessfull!",
        });
        data({ type: "PASSWORDERROR" });
      }
    })
    .catch((err) => {
      console.log(err);
      data({ type: "ERROR" });
    });
};

export const Store = legacy_createStore(reducer, applyMiddleware(thunk));