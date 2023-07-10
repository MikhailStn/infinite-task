import { FixedSizeList } from 'react-window';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { users } from './UserForm';

const Row = ({ index, style }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const className = useSelector((state) => state.userListReducer.className);
  const prevEl = useSelector((state) => state.prevListItemReducer.prevEl);
  return (
    <li
      onClick={() => {
        dispatch({ type: 'SHOW_USER_INFO', payload: ref });
        dispatch({ type: 'REMOVE_CLASS', payload: ref.current });
        if (prevEl) {
          prevEl.className = 'user-list__item';
        }
        dispatch({
          type: 'CHANGE_CURRENT_USER',
          payload: {
            index: index,
            id: users[index].id,
            age: users[index].age,
            firstName: users[index].firstName,
            lastName: users[index].lastName,
            email: users[index].email,
          },
        });
        ref.current.className = 'user-list__item active';
      }}
      ref={ref}
      key={users[index].id}
      id={index}
      className={className}
      style={style}
    >
      Пользователь {index + 1}
    </li>
  );
};

export function UserList() {
  return (
    <div className="user-list__container">
      <FixedSizeList height={500} itemCount={1000000} itemSize={30} className="list">
        {Row}
      </FixedSizeList>
    </div>
  );
}
