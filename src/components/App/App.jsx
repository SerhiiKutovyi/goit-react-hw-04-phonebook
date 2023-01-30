import { Section } from './App.styles';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm ';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

// const LOCAL_KEY = 'Users-key';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const UsersKeys = localStorage.getItem(LOCAL_KEY);
  //   localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  //   setContacts({ contacts: JSON.parse(UsersKeys) });
  // }, [contacts]);

  const formSubmitHandler = data => {
    const newUser = {
      id: nanoid(),
      ...data,
    };
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    setContacts(() => [newUser, ...contacts]);
  };

  const filterUsers = event => {
    setFilter({ filter: event.target.value });
  };

  const verification = () => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(
        user =>
          user.name.toLowerCase().includes(filter.toLowerCase()) ||
          user.number.includes(filter)
      );
    }
  };

  const deleteUsers = userId => {
    setContacts(contacts.filter(user => user.id !== userId));
  };

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={setFilter} click={filterUsers} />

        <ContactList contacts={verification()} deleteUsers={deleteUsers} />
      </Section>
    </>
  );
};

// export class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// componentDidMount() {
//   const UsersKeys = localStorage.getItem(LOCAL_KEY);
//   if (UsersKeys) {
//     this.setState({ contacts: JSON.parse(UsersKeys) });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   const { contacts } = this.state;
//   if (prevState.contacts !== contacts) {
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
//   }
// }

// formSubmitHandler = data => {
//   const newUser = {
//     id: nanoid(),
//     ...data,
//   };
//   if (this.state.contacts.some(ele => ele.name === data.name)) {
//     alert(`${data.name} is already in contacts!`);
//     return;
//   } else {
//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, newUser],
//       };
//     });
//   }
// };

// filterUsers = event => {
//   this.setState({ filter: event.target.value });
// };

// verification = () => {
//   const { filter, contacts } = this.state;
//   if (!filter) {
//     return contacts;
//   } else {
//     return contacts.filter(
//       user =>
//         user.name.toLowerCase().includes(filter.toLowerCase()) ||
//         user.number.includes(filter)
//     );
//   }
// };

// deleteUsers = userId => {
//   this.setState(prevState => {
//     return {
//       contacts: prevState.contacts.filter(user => user.id !== userId),
//     };
//   });
// };

//   render() {
//     return (
//       <>
//         <Section>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={this.formSubmitHandler} />
//           <h2>Contacts</h2>
//           <Filter filter={this.state.filter} click={this.filterUsers} />

//           <ContactList
//             contacts={this.verification()}
//             deleteUsers={this.deleteUsers}
//           />
//         </Section>
//       </>
//     );
//   }
// }
