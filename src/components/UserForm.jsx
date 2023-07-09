import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const users = require("../data/generated.json").slice(0);

export function UserForm() {
  const dispatch = useDispatch();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  const [savedDataStyle, setSavedDataStyle] = useState({
    display: "none",
  });

  const [emailDataStyle, setEmailDataStyle] = useState({
    display: "none",
  });

  const currentUser = {
    index: useSelector((state) => state.currentUserReducer.index),
    id: useSelector((state) => state.currentUserReducer.id),
    age: useSelector((state) => state.currentUserReducer.age),
    firstName: useSelector((state) => state.currentUserReducer.firstName),
    lastName: useSelector((state) => state.currentUserReducer.lastName),
    email: useSelector((state) => state.currentUserReducer.email),
  };

  return (
    <form className="user-info__form">
      <div className="user-info__item">
        <p className="user-info__subtitle">ID:</p>
        <input
          className="user-info__id user__info-input"
          value={currentUser.id}
          onChange={() => {
            return;
          }}
        ></input>
      </div>
      <div className="user-info__item">
        <p className="user-info__subtitle">First Name:</p>
        <input
          ref={firstNameRef}
          className="user-info__first-name user__info-input"
          value={currentUser.firstName}
          onChange={() => {
            dispatch({
              type: "CHANGE_CURRENT_USER_FIRST_NAME",
              payload: firstNameRef.current.value,
            });
          }}
        ></input>
      </div>
      <div className="user-info__item">
        <p className="user-info__subtitle">Last Name:</p>
        <input
          ref={lastNameRef}
          className="user-info__last-name user__info-input"
          value={currentUser.lastName}
          onChange={() => {
            dispatch({
              type: "CHANGE_CURRENT_USER_LAST_NAME",
              payload: lastNameRef.current.value,
            });
          }}
        ></input>
      </div>
      <div className="user-info__item">
        <p className="user-info__subtitle">Age:</p>
        <input
          type="number"
          ref={ageRef}
          className="user-info__age user__info-input"
          value={currentUser.age}
          onChange={() => {
            dispatch({
              type: "CHANGE_CURRENT_USER_AGE",
              payload: ageRef.current.value,
            });
          }}
        ></input>
      </div>
      <div className="user-info__item">
        <p className="user-info__subtitle">Email:</p>
        <input
          type="email"
          ref={emailRef}
          className="user-info__email user__info-input"
          value={currentUser.email}
          onChange={() => {
            dispatch({
              type: "CHANGE_CURRENT_USER_EMAIL",
              payload: emailRef.current.value,
            });
          }}
        ></input>
      </div>
      <button
        type="submit"
        className="user-info__button"
        onClick={(e) => {
          e.preventDefault();
          if (emailRef.current.value.includes("@")) {
            users[currentUser.index] = currentUser;
            setSavedDataStyle({ display: "block" });
            setTimeout(() => {
              setSavedDataStyle({ display: "none" });
            }, 1000);
          } else {
            setEmailDataStyle({ display: "block" });
            setTimeout(() => {
              setEmailDataStyle({ display: "none" });
            }, 1000);
          }
        }}
      >
        Сохранить
      </button>
      <p
        style={savedDataStyle}
        className="user-info__saved"
      >
        Данные сохранены
      </p>
      <p
        style={emailDataStyle}
        className="user-info__email-err"
      >
        Почтовый адрес должен содержать символ @
      </p>
    </form>
  );
}
