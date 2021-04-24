import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button">Increment by {step}</button>
//         <button type="button">Decrement by {step}</button>
//       </div>
//     );
//   }
// }

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button
//           type="button"
//           onClick={evt => {
//             console.log('Increment button was clicked!', evt); // работает
//             console.log('this.props: ', this.props); // работает
//           }}
//         >
//            Increment by {step}
//         </button>
//         <button
//           type="button"
//           onClick={evt => {
//             console.log('Decrement button was clicked!', evt); // работает
//             console.log('this.props: ', this.props); // работает
//           }}
//         >
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

  // constructor() {
  //   super();

  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  // handleIncrement(evt) {
  //   console.log('Increment button was clicked!', evt); // работает
  //   console.log('this.props: ', this.props); // Error: cannot read props of undefined
  // }

  // handleDecrement(evt) {
  //   console.log('Decrement button was clicked!', evt); // работает
  //   console.log('this.props: ', this.props); // Error: cannot read props of undefined
  // }  

// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button type="button" onClick={this.handleIncrement}>
//         Increment by {step}
//       </button>
//       <button type="button" onClick={this.handleDecrement}>
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }
// }
// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button type="button" onClick={this.handleIncrement.bind(this)}>
//         Increment by {step}
//       </button>
//       <button type="button" onClick={this.handleDecrement.bind(this)}>
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }
// }

// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button type="button" onClick={this.handleIncrement}>
//         Increment by {step}
//       </button>
//       <button type="button" onClick={this.handleDecrement}>
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }
// }

// handleIncrement = evt => {
//   console.log('Increment button was clicked!', evt); // работает
//   console.log('this.props: ', this.props); // работает
// };

// handleDecrement = evt => {
//   console.log('Decrement button was clicked!', evt); // работает
//   console.log('this.props: ', this.props); // работает
// };

// render() {
//   const { step } = this.props;

//   return (
//     <div>
//       <span>0</span>
//       <button type="button" onClick={this.handleIncrement}>
//         Increment by {step}
//       </button>
//       <button type="button" onClick={this.handleDecrement}>
//         Decrement by {step}
//       </button>
//     </div>
//   );
// }
// }

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: this.props.initialValue,
  //   };
  // }

  // state = {
  //   value: this.props.initialValue,
  // };
  // state = { fullName: 'Poly' };

  // this.setState({
  //   fullName: 'Mango',
  // });

//  handleIncrement = evt => {
//   console.log('Increment button was clicked!', evt); // работает
//   console.log('this.props: ', this.props); // работает
// };

// handleDecrement = evt => {
//   console.log('Decrement button was clicked!', evt); // работает
//   console.log('this.props: ', this.props); // работает
// };
// class Counter extends Component {
//     static defaultProps = {
//       step: 1,
//       initialValue: 0,
//     };

//     state = {
//       value: 0,
//     };


//     handleIncrement = () => {
//       this.setState((state, props) => ({
//         value: state.value + props.step,
//       }));
//     };

//     handleDecrement = () => {
//       this.setState((state, props) => ({
//         value: state.value - props.step,
//       }));
//     };

//     render() {
//       return (
//         <div>
//         <span>{this.state.value}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {this.step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {this.step}
//         </button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Counter initialValue={10} />, document.getElementById('root'));

// class Toggle extends Component {
//   state = { isOpen: false };

//   show = () => this.setState({ isOpen: true }, console.log(this.state));

//   hide = () => this.setState({ isOpen: false }, console.log(this.state));

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <>
//         <button onClick={this.show}>Show</button>
//         <button onClick={this.hide}>Hide</button>
//         {isOpen && children}
//       </>
//     );
//   }
// }

// class Toggle extends Component {
//   state = { isOpen: false };

//   toggle = () => {
//     this.setState(state => ({ isOpen: !state.isOpen }));
//   };

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <div>
//         <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
//         {isOpen && children}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Toggle />, document.getElementById('root'));


// ReactDOM.render(<Counter step={5} />, document.getElementById('root'));

/*
 * Button получает функцию changeMessage (имя пропа),
 * которая вызывается при событии onClick
 */
// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// class App extends Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   // Метод который будем передавать в Button для вызова при клике
//   updateMessage = evt => {
//     console.log(evt); // Доступен объект события

//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// class App extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = event => {
//     this.setState({ value: event.target.value });
//     console.log(this.state)
//   };

//   render() {
//     const { value } = this.state;

//     return <input type="text" value={value} onChange={this.handleChange} />;
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// class SignUpForm extends Component {
//   state = {
//     login: '',
//   };

//   /*
//    * Отвечает за обновление состояния
//    */
//   handleChange = e => {
//     this.setState({ login: e.target.value });
//   };

//   /*
//    * Вызывается при отправке формы
//    */
//   handleSubmit = evt => {
//     evt.preventDefault();
//     alert(`Signed up as: ${this.state.login}`);

//     // Проп который передается форме для вызова при сабмите
//     this.props.onSubmit(this.state.login);
//   };

//   render() {
//     const { login } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<SignUpForm />, document.getElementById('root'));


/*
 * Выносим объект с примитивами в константу чтобы было удобно сбрасывать.
 * Нельзя использовать если в каком-то свойстве состояния хранится сложный тип.
 */
// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
// };

// class SignUpForm extends React.Component {
//   state = { ...INITIAL_STATE };

//   /*
//    * Для всех инпутов создаем один обарботчик
//    * Различать инпуты будем по атрибуту name
//    */
//   handleChange = ({ target }) => {
//     const { name, value } = target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();

//     const { login, email, password } = this.state;

//     alert(`
//       Login: ${login}
//       Email: ${email}
//       Password: ${password}
//     `);

//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { login, email, password } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<SignUpForm />, document.getElementById('root'));


const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
    console.log(this.state.agreed)
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password, agreed } = this.state;

    alert(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
      Agreed: ${agreed}
    `);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };


  render() {
    const { login, email, password, agreed, gender, age  } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

ReactDOM.render(<SignUpForm />, document.getElementById('root'));
