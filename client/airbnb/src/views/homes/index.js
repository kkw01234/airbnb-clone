import React, { useState } from "react";
import Counter from "../../component/Counter/index";
import { Button } from "./style";
import Modal from "../../component/Modal/index";
import sendRequest from "../../utils/sendRequest";
const adult = {
  name: "성인",
  comment: "",
  count: 0
};
const child = {
  name: "소아",
  comment: "2~12세",
  count: 0
};
const baby = {
  name: "유아",
  comment: "2세 미만",
  count: 0
};
let peopleCount = 0;

export const peopleReducer = (state, action) => {
  switch (action.upAndDown) {
    case "up":
      peopleCount += 1;
      return { ...state, count: state.count + 1 };
    case "down":
      if (state.count <= 0) return { ...state };
      peopleCount -= 1;
      return { ...state, count: state.count - 1 };
  }
};

const filterHandler = async () => {
  const query = `query{
        findAccFilter(person: ${peopleCount}){
            name,
            address,
            image,
            content,
            price,
            rating
            host_id
        }
    }`;

  const data = await sendRequest(query);
  console.log(data);
};

const homes = (props) => {
//   const [modalWindow, setModalWindow] = useState({
//     date: false,
//     personCount: false,
//     type: false,
//     filter: false
//   });
//   const counterHandler = () => {
//     // console.log("test");
//     setModalWindow({ ...modalWindow, personCount: true });
//   };
  return (
    <div>
      <div>
        <div></div>
      </div>
      <div>
        <Button>날짜</Button>
        <Button>인원</Button>
        <Button>출장</Button>
        <Button>숙소 유형</Button>
        <Button>필터 추가하기</Button>
      </div>
      {/* {modalWindow.personCount && <p>으앙아아아ㅏㅇ</p>} */}
      <Modal
        content={
          <div>
            <Counter type={"adult"} value={adult} />
            <Counter type={"child"} value={child} />
            <Counter type={"baby"} value={baby} />
            <div>
              <Button onClick={filterHandler}>저장</Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default homes;
