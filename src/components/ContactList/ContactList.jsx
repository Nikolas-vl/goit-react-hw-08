import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { contactsReducer, selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={s.list}>
        {filteredData.map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
