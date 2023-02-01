import { useState } from 'react';
import { FormStyled } from './ContactForm.styles';

export const ContactForm = ({ onContactSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onContactSubmit(state);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button type="submit"> Add contact</button>
    </FormStyled>
  );
};

// export class OldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <FormStyled onSubmit={this.handleSubmit}>
//         <label htmlFor="Name">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleChange}
//         />
//         <label htmlFor="number">Number</label>
//         <input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={this.handleChange}
//         />
//         <button type="submit"> Add contact</button>
//       </FormStyled>
//     );
//   }
// }
