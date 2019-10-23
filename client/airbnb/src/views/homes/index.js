import React, { useState, createContext, useReducer } from "react";
import Counter from "../../component/Counter/index";
import { Button } from "./style";
/* reducer */
import { countPeopleReducer, roomTypeReducer } from "./reducer";
import Modal from "../../component/Modal/index";
import sendRequest from "../../utils/sendRequest";
import AccommodationType from "../../component/AccommodationType";

/* context API */
export const CountPeopleContext = createContext();
export const RoomTypeContext = createContext();

const adult = {
  name: "성인",
  comment: ""
};
const child = {
  name: "소아",
  comment: "2~12세"
};
const baby = {
  name: "유아",
  comment: "2세 미만"
};

const type = {
  whole_house: {
    title: "전체 집",
    content: "집 전체를 단독으로 사용합니다."
  },
  private_room: {
    title: "개인실",
    content:
      "침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수 있습니다."
  },
  hotel_room: {
    title: "호텔 객실",
    content: "부트크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다."
  },
  multi_person_room: {
    title: "다인실",
    content:
      "사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다."
  }
};
const typeCheck = {
  date: false,
  private_room: false,
  hotel_room: false,
  multi_person_room: false
};

const filterHandler = async () => {
  const query = `query{
        findAccFilter(person: ${"0"}){
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

const Homes = props => {
  const [countPeople, countPeopleDispatch] = useReducer(countPeopleReducer, {
    adult: 0,
    child: 0,
    baby: 0
  });
  const [roomType,roomTypeDispatch] = useReducer(roomTypeReducer, {
    whole_house: false,
    private_room: false,
    hotel_room: false,
    multi_person_room: false
  });

  const [modalState, setModalState] = useState({
    date: false,
    personCount: false,
    type: false,
    filter: false
  });

  const counterHandler = state => {
    Object.keys(modalState).map((value)=>{
      modalState[value] = false;
    });
    modalState[state] = !modalState[state];
    setModalState({ ...modalState });
  };
  return (
    <div>
      <div>
        <div></div>
      </div>
      <div>
        <Button onClick={counterHandler.bind(this, "date")}>날짜</Button>
        <Button onClick={counterHandler.bind(this, "personCount")}>인원</Button>
        <Button onClick={counterHandler.bind(this, "type")}>숙소 유형</Button>
        <Button onClick={counterHandler.bind(this, "filter")}>
          필터 추가하기
        </Button>
      </div>
      {modalState.date && (
        <Modal
          content={
            <div>
              <p>date</p>
            </div>
          }
        />
      )}
      {modalState.personCount && (
        <CountPeopleContext.Provider
          value={{ countPeople, countPeopleDispatch }}
        >
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
        </CountPeopleContext.Provider>
      )}

      {modalState.type && (
        <Modal
          content={
            <RoomTypeContext.Provider value={{roomType,roomTypeDispatch}}>
              <AccommodationType
                value={"whole_house"}
                title={type.whole_house.title}
                content={type.whole_house.content}
              />
              <AccommodationType
                value={"private_room"}
                title={type.private_room.title}
                content={type.private_room.content}
              />
              <AccommodationType
                value={"hotel_room"}
                title={type.hotel_room.title}
                content={type.hotel_room.content}
              />
              <AccommodationType
                value={"multi_person_room"}
                title={type.multi_person_room.title}
                content={type.multi_person_room.content}
              />
            </RoomTypeContext.Provider>
          }
        />
      )}
      {modalState.filter && (
        <Modal
          content={
            <div>
              <p>filter</p>
            </div>
          }
        />
      )}
    </div>
  );
};

export default Homes;
