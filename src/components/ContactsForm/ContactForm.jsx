import { useReducer } from 'react';
import css from './ContactsForm.module.css';

function reducer(prevState, action) {
  if (action.type === 'name') {
    return {
      ...prevState,
      name: action.payload,
    };
  } else {
    return {
      ...prevState,
      number: action.payload,
    };
  }
}
export const ContactForm = ({ createContact }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    number: '',
  });

  const handleChange = e => {
    if (e.target.name === 'name')
      dispatch({ type: 'name', payload: e.target.value });
    if (e.target.name === 'number')
      dispatch({ type: 'number', payload: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    createContact(state);
    reset();
  };

  const reset = () => {
    dispatch({ type: 'name', payload: '' });
    dispatch({ type: 'number', payload: '' });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>Name</label>
        <input
          className={css.inputForm}
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={state.name}
        />
        <label>Phone</label>
        <input
          className={css.inputForm}
          type="tel"
          name="number"
          required
          onChange={handleChange}
          value={state.number}
        />
        <button className={css.button}>Add contact</button>
      </form>
    </>
  );
};
