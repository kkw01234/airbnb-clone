import React, { useState,useContext } from "react";
import "react-dates/initialize";
import { DateRangePicker, DayPickerRangeController } from "react-dates";
import { DateWrap } from "./style";
import moment, { months } from "moment";
import "react-dates/lib/css/_datepicker.css";
import {ModalContext,DateContext} from '../../views/homes/index'

//여기서 useState => useReducer
export const Calender = (props) => {
  const {date, dateDispatch} = useContext(DateContext)
  const [focus, setFocus] = useState("startDate");
  const {modalState, modalStateDispatch} = useContext(ModalContext);
  return (
    <>
      <DateWrap>
        <DayPickerRangeController
          startDate={date.startDate} // momentPropTypes.momentObj or null,
          startDateId={date.startDate}
          endDate={date.endDate} // momentPropTypes.momentObj or null,
          endDateId={date.endDate}
          onDatesChange={({ startDate, endDate }) => {
            // setStartDate(startDate);
            // setEndDate(endDate);
            dateDispatch({startDate,endDate})
          }}
          numberOfMonths={2}
          focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => {
            setFocus(focusedInput ? focusedInput : "startDate");
          }} // PropTypes.func.isRequired,
          initialVisibleMonth={null} // PropTypes.func or null,
        />
       
      </DateWrap>
    </>
  );
};
