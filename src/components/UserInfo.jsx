import { useSelector } from 'react-redux';
import { UserForm } from './UserForm';

export function UserInfo() {
  const isUserActive = useSelector((state) => state.isUserActiveReducer.isUserActive);

  const currentId = useSelector((state) => state.currentUserReducer.index);

  return isUserActive ? (
    <div className="user-info__container">
      <h2>Пользователь {currentId + 1}</h2>
      <div className="user-info__content">
        <div className="user-info__logo"></div>
        <div className="user-info__description">
          <UserForm />
        </div>
      </div>
    </div>
  ) : (
    <div className="user-info__container non-selected">
      <h1>No user selected</h1>
    </div>
  );
}
