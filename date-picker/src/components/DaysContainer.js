import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  width: 50px;
  margin: 12px 0px;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  z-index: 1;
  color: ${props => props.active ? '#fff' : 'black'};

  ::after {
    content: '';

    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 38px;
    width: 38px;
    background-color: ${props => props.active ? '#6200ee' : 'transparent'};
    // border-width: 2px;
    // border-style: solid;
    // border-color: ${props => props.active ? '#6200ee' : 'transparent'};
    border-radius: 50%;
  }
`;

function DaysContainer({ handleDaysOfCurrentMonth }) {

  const findIndexOfCurrentDay = (daysInSelectedMonth) => {
    let currentDay = moment().format('D');

    return daysInSelectedMonth.findIndex(day => day === parseInt(currentDay));
  }

  const handleDaysInMonth = () => {
    let currentMonth = moment().month() + 1;
    let currentYear = moment().year();

    let daysInMonth = moment(`${currentYear}-${currentMonth}`, "YYYY-MM").daysInMonth();

    let begginingDayOfMonth = moment(`${currentYear}-${currentMonth}`).day();
    let emptyDivsForStartingDay = Array(begginingDayOfMonth);

    let daysInCurrentMonth = Array.from(Array(daysInMonth).keys()).map(x => x + 1);

    let currentMonthResult = [...emptyDivsForStartingDay, ...daysInCurrentMonth]

    let findIndex = findIndexOfCurrentDay(currentMonthResult)
    
    let indexOfSelectedDay = currentMonthResult[findIndex];

    let sum = currentMonthResult.map(day => {
      return day = {
        day: day === undefined ? null : day,
        active: indexOfSelectedDay === day ? true : false
      }
    })

    console.log(sum)

    return sum;
  }

  return (
    <div className="days">
      {handleDaysInMonth()
        .map((day, i) => 
          <Div 
            active={day.active} 
            key={i} 
            className="day" >
            {day.day}
          </Div>
        )
      }
    </div>
  )
}

export default DaysContainer;