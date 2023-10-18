import css from './ContactsList.module.css';
export const ContactList = ({ contacts, deleteContactFromList }) => {
  return (
    <>
      <ul className={css.listContact}>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}&nbsp;
            <button
              className={css.button}
              onClick={() => deleteContactFromList(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
