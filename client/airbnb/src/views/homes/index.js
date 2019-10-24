import React, { useState, createContext, useReducer, useEffect } from "react";
import Counter from "../../component/Counter/index";
import { Button, ButtonContainer } from "./style";
/* reducer */
import {
  countPeopleReducer,
  roomTypeReducer,
  ModalReducer,
  DateReducer,
  PriceReducer
} from "./reducer";
import Modal from "../../component/Modal/index";
import sendRequest from "../../utils/sendRequest";
import AccommodationType from "../../component/AccommodationType";
import Slide from "../../component/Slide";
import { Calender } from "../../component/Calender";
import moment from "moment";
import { Accommodation } from "../../component/Accommodation/index";

/* context API */
export const CountPeopleContext = createContext();
export const RoomTypeContext = createContext();
export const PriceContext = createContext();
export const ModalContext = createContext();
export const DateContext = createContext();

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

let isFetching =false;

const Homes = props => {
  
  const [countPeople, countPeopleDispatch] = useReducer(countPeopleReducer, {
    adult: 0,
    child: 0,
    baby: 0
  });
  const [roomType, roomTypeDispatch] = useReducer(roomTypeReducer, {
    whole_house: false,
    private_room: false,
    hotel_room: false,
    multi_person_room: false
  });
  const [price,priceDispatch] = useReducer(PriceReducer, [0,1000000]);
  const [date, dateDispatch] = useReducer(DateReducer, {
    startDate: moment(),
    endDate: moment()
  });
  const [modalState, modalStateDispatch] = useReducer(ModalReducer, {
    date: false,
    personCount: false,
    type: false,
    price: false
  });

  const filterHandler = async () => {
    const count = Object.keys(countPeople).reduce((prev, curr) => {
      prev += countPeople[curr];
      return prev;
    }, 0);
    console.log(price);
    const query = `query{
          findAccFilter(
            check_in: "${date.startDate._d}",
            check_out: "${date.endDate._d}", 
            person: ${count},
            whole_house : ${roomType.whole_house},
            private_room : ${roomType.private_room},
            hotel_room : ${roomType.hotel_room},
            multi_person_room : ${roomType.multi_person_room},
            low_price : ${price[0]},
            high_price : ${price[1]}){
              name,
              address,
              image,
              content,
              price,
              rating
              host_id,
              min_person,
              max_person,
              room_count,
              bathroom_count
          }
      }`;
    // console.log(query);
    const data = await sendRequest(query);
    setAccommodations(data.findAccFilter);
    
    // return data;
  };
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(!loading) return;
    setLoading(false);
    filterHandler();
  })


  const counterHandler = state => {
    modalStateDispatch({ type: state });
  };
  if(loading) return (<div></div>);
  else
  return (
    <div>
      <div>
        <div></div>
      </div>
      {/* {getAccommodation()} */}
      <ModalContext.Provider value={{ modalState, modalStateDispatch }}>
        <div>
          <Button onClick={counterHandler.bind(this, "date")}>날짜</Button>
          <Button onClick={counterHandler.bind(this, "personCount")}>
            인원
          </Button>
          <Button onClick={counterHandler.bind(this, "type")}>숙소 유형</Button>
          <Button onClick={counterHandler.bind(this, "price")}>
            필터 추가하기(가격)
          </Button>
        </div>

        {modalState.date && (
          <DateContext.Provider value={{ date, dateDispatch }}>
            <Modal
              content={
                <div>
                  <Calender type={"date"}></Calender>

                  <ButtonContainer>
                    <Button
                      onClick={() => {
                        modalStateDispatch({ type: "date" });
                      }}
                    >
                      취소
                    </Button>
                    <Button
                      onClick={() => {
                        modalStateDispatch({ type: "date" });
                        filterHandler();
                      }}
                    >
                      확인
                    </Button>
                  </ButtonContainer>
                </div>
              }
            />
          </DateContext.Provider>
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
                  <ButtonContainer>
                    <Button
                      onClick={() => {
                        modalStateDispatch({ type: "personCount" });
                      }}
                    >
                      취소
                    </Button>
                    <Button
                      onClick={() => {
                        modalStateDispatch({ type: "personCount" });
                        filterHandler();
                      }}
                    >
                      확인
                    </Button>
                  </ButtonContainer>
                </div>
              }
            />
          </CountPeopleContext.Provider>
        )}

        {modalState.type && (
          <Modal
            content={
              <RoomTypeContext.Provider value={{ roomType, roomTypeDispatch }}>
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
                 <ButtonContainer>
                    <Button
                      onClick={() => {
                        modalStateDispatch({ type: "type" });
                      }}
                    >
                      취소
                    </Button>
                    <Button
                      onClick={() => {
                        modalStateDispatch({ type: "type" });
                        filterHandler();
                      }}
                    >
                      확인
                    </Button>
                  </ButtonContainer>
              </RoomTypeContext.Provider>
             
            }
          />
        )}
        {modalState.price && (
          <Modal
            content={
              <PriceContext.Provider value={{price,priceDispatch}}>
                <Slide></Slide>
                <ButtonContainer>
                    <Button
                      onClick={() => {
                        modalStateDispatch({ type: "price" });
                      }}
                    >
                      취소
                    </Button>
                    <Button
                      onClick={() => {
                        modalStateDispatch({ type: "price" });
                        filterHandler();
                      }}
                    >
                      확인
                    </Button>
                  </ButtonContainer>
              </PriceContext.Provider>
              
            }
          />
        )}
      </ModalContext.Provider>
      <div>
        <div>총 {accommodations.length}객실</div>
        {
          accommodations.length >=1  &&
          (
            accommodations.map((accommodation,idx)=>{
            
              return <Accommodation key={idx} accommodation={accommodation}/>
            })
          )

        }
       
      </div>
    </div>
  );
};

export default Homes;
