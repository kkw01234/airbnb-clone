import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker, DayPickerRangeController } from "react-dates";
import { DateWrap,ButtonContainer } from "./style";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";

export const Calender = () => {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [focus, setFocus] = useState("startDate");
  return (
    <>
      <DateWrap>
        <DayPickerRangeController
          startDate={startDate} // momentPropTypes.momentObj or null,
          endDate={endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          numberOfMonths={2}
          focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => {
            setFocus(focusedInput ? focusedInput : "startDate");
          }} // PropTypes.func.isRequired,
          initialVisibleMonth={() => moment()} // PropTypes.func or null,
        />
        <ButtonContainer>
          <button>취소</button>
          <button>확인</button>
        </ButtonContainer>
      </DateWrap>
    </>
  );
};
