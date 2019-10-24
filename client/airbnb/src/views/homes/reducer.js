export const countPeopleReducer = (state, action) => {
  switch (action.upAndDown) {
    case "up":
      // peopleCount += 1;
      state[action.type]++;
      return { ...state };
    case "down":
      if (state.count <= 0) return { ...state };
      // peopleCount -= 1;
      state[action.type]--;
      return { ...state };
  }
};

export const roomTypeReducer = (state, action) => {
  console.log(state);
  state[action.name] = !state[action.name];
  return {...state};
};

export const PriceReducer = (state, action) =>{
    console.log(state, action);
    return action.price;
}

export const ModalReducer = (state, action) =>{
  console.log(action);
  Object.keys(state).forEach(value=>{
   
    if(value === action.type) state[value] = !state[value];
    else state[value] = false;
  });
  console.log(action.type, state);
  return {...state};
}


export const DateReducer = (state, action) =>{
    return {startDate: action.startDate, endDate: action.endDate};
}
