import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from './ContactForm.styled';
import ButtonWithIcon from 'components/IconButton/IconButton.styled';

import { HiOutlineUserAdd } from 'react-icons/hi';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit(name, number)) resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form className="ContactForm" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <ButtonWithIcon type="submit" aria-label="Add new contact">
        <HiOutlineUserAdd size={25} color="#913fd5" />
      </ButtonWithIcon>
    </Form>
  );
};

// class ContactForm1 extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.props.onSubmit(this.state)) this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form className="ContactForm" onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Phone:
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <ButtonWithIcon type="submit" aria-label="Add new contact">
//           <HiOutlineUserAdd size={25} color="#913fd5" />
//         </ButtonWithIcon>
//       </Form>
//     );
//   }
// }

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
