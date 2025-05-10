import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>loading...</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
