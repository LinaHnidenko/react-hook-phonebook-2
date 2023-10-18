import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label className={css.labelFilter}>
        Find contacts by name
        <input
          className={css.input}
          placeholder="Filter by name"
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};
