export const loadState = () => {
  try{
    const serializedState = localStorage.getItem('evanState');
    if (serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err){
    console.log("ERROR LOADING STATE: ", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('evanState', serializedState);
  }catch(err){
    console.log("ERROR SAVING STATE: ", err);
  }
}
