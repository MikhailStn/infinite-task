import { FixedSizeList } from 'react-window';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const users = require('../data/generated.json');

const Row = ({ index, style }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const className = useSelector((state) => state.userListReducer.className);
  return (
    <li
      onClick={() => {
        dispatch({ type: 'REMOVE_CLASS' });
        ref.current.className = 'user-list__item active';
      }}
      ref={ref}
      key={users[index].id}
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
