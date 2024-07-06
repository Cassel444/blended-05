import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContent } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const value = evt.target.value;
    dispatch(filterContent(value));
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
