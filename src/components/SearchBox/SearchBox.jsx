import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilter = query => {
    dispatch(changeFilter(query));
  };

  return (
    <div className={s.wrapper}>
      <p>Find contact by name</p>
      <input
        className={s.input}
        type='text'
        onChange={e => {
          handleFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
