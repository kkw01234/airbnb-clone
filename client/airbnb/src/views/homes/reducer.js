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

export const priceTypeReducer = (state, action) =>{
    console.log(state, action);
}