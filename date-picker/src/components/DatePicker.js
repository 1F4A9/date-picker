import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import moment from 'moment';

import DaysContainer from './DaysContainer';

const Container = styled.div`
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  background-color: #fff;
  position: absolute;
  width: 352px;
  left: 50%;
  margin-left: -175px;
  top: 50%;
  margin-top: -67px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  /* ----------------------- HEADER ----------------------- */

  header {
    height: 110px;
    background-color: #6200EE;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .header-top {
    height: 45px;
  }

  .header-bottom {
    height: 55px;
  }
  
  .header-top p {
    padding: 18px;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
    color: #fff;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  .header-bottom h1 {
    font-weight: 500;
    color: #fff;
    padding: 18px;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  /* ----------------------- MAIN ----------------------- */
  main {
    height: 320px;
    background-color: #fff;
  }

  main .year {
    display: flex;
    color: #666666;
  }

  main .year p {
    font-size: 14px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding: 18px 4px 18px 18px;
  }

  main .year .down-arrow,
  main .year .left-arrow,
  main .year .right-arrow {
    line-height: 54px;
    cursor: pointer;
  }

  main .year .down-arrow {
    margin-right: 125px;
  }

  main .year .left-arrow {
    margin-right: 24px;
  }

  main .days-of-the-week {
    display: flex;
    font-size: 14px;
    color: #666666;
    margin-bottom: 20px;
  }

  main .days-of-the-week > div {
    width: 50px;
    text-align: center;
  }

  main .days {
    display: flex;
    flex-wrap: wrap;
  }

  /* ----------------------- FOOTER ----------------------- */

  footer {
    height: 70px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  footer .buttons {
    display: flex;
    justify-content: flex-end;
  }

  footer .ok,
  footer .cancel {
    line-height: 70px;
    font-weight: 600;
    color: #6200EE;
    cursor: pointer;
    text-transform: uppercase;
  }

  footer .ok {
    margin-right: 24px;
  }

  footer .cancel {
    margin-right: 40px;
  }
`;

class DatePicker extends React.Component {

  getTodaysDate() {
    return moment().format("ddd, MMM D")
  }

  render() {
    const daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    return ReactDOM.createPortal (
      <Container>
        <header>
          <div className="header-top">
            <p>select date</p>
          </div>
          <div className="header-bottom">
            <h1>{this.getTodaysDate()}</h1>
          </div>
        </header>
        <main>
          <div className="year">
            <p>November 2018</p>
            <i className="material-icons down-arrow">arrow_drop_down</i>
            <i className="material-icons left-arrow">keyboard_arrow_left</i>
            <i className="material-icons right-arrow">keyboard_arrow_right</i>
          </div>
          <div className="days-of-the-week">
            {daysOfTheWeek.map((weekday, i) => <div key={i}>{weekday}</div>)}
          </div>
          <DaysContainer handleDaysOfCurrentMonth={this.handleDaysOfCurrentMonth}>

          </DaysContainer>
        </main>
        <footer>
          <div className="buttons">
            <div className="cancel">cancel</div>
            <div className="ok">ok</div>
          </div>
        </footer>
      </Container>,
      document.getElementById('portal-root')
    )
  }
}

export default DatePicker;