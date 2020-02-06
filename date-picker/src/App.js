import React from 'react';
import styled from 'styled-components';

import DatePicker from './components/DatePicker';

const Container = styled.div`
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Rubik', sans-serif;

  h1 {
    margin-bottom: 100px;
    color: #212529;
  }

  .form-container {
    padding: 40px;
    width: 400px;
  }

  .input-container {
    width: 350px;
    padding: 25px;
  }

  .input-container::after {
    content: "";
    display: block;
    border: 1px solid black;
    width: 100%;
    border-color: #555555;
    opacity: 0.6;
    transition: all 0.5s;
  }

  .input-birth:hover::after,
  .input-container:hover::after {
    border-color: #57b846;
  }

  .submit-container {
    width: 350px;
    padding: 25px;
  }

  .input {
    box-sizing: border-box;
    width: 100%;
    padding: 9px;
    font-weight: 600;
    outline: none;
    border: none;
    font-size: 16px;
  }

  input::placeholder {
    color: #555555;
    opacity: 0.6;
  }

  .footer {
    margin-top: 200px;
    font-size: 14px;
  }

  .submit {
    border-radius: 24px;
    padding: 14px;
    background-color: #57b846;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.4s;
  }

  .submit:hover {
    background-color: #212529;
    opacity: 0.9;
  }

  .birthdate {
    width: 100%;
  }

  .input-birth {
    position: relative;
    width: 350px;
    padding: 25px;
  }

  .input-birth::after {
    content: "";
    display: block;
    border: 1px solid black;
    width: 100%;
    border-color: #555555;
    opacity: 0.6;
    transition: all 0.5s;
  }

  .datepicker-dropdown {
    position: absolute;
    right: 25px;
    cursor: pointer;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDatePicker: false,
    };
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const datePicker = this.state.showDatePicker;

    if (datePicker === false) {
      this.setState({ showDatePicker: true })
    } else {
      this.setState({ showDatePicker: false })
    }
  }

  render() {
    return (
      <Container>
        {this.state.showDatePicker ? <DatePicker/> : null}
        <div className="form-container">
          <h1>Welcome</h1>
          <form>
            <div className="input-container">
              <input
                className="input name"
                type="text"
                placeholder="Name"
                />
            </div>
            <div className="input-birth">
              <input 
                className="input birthdate"
                type="text"
                placeholder="Birthdate"
              />
              <i className="material-icons datepicker-dropdown" onClick={this.onClick}>date_range</i>
            </div>
            <div className="input-container">
              <input 
                className="input password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="submit-container">
            <input 
              className="input submit"
              type="submit"
            />
            </div>
          </form>
          <div className="footer">
            <p>This is a fake page to illustrate the datepicker</p>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
