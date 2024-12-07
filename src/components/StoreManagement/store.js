import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import getProducts from "./apiService";




const cartInitialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "carListData",
  initialState: cartInitialState,
  reducers: {
    addTocart: (state, action) => {
      const isthere = state.cartList.some(
        (each) => each.id === action.payload.id
      );

      !isthere && state.cartList.push(action.payload);
    },
    incrementTheProductQuality: (state, action) => {
      state.cartList=state.cartList.map((each) =>
        each.id === action.payload? { ...each, quantity: each.quantity + 1 } : each
      );
    },

    decrementTheQuality: (state, action) => {
      console.log("okay",action.payload)

      state.cartList=state.cartList.map((each) =>
        each.id === action.payload ? { ...each, quantity: each.quantity - 1 } : each
      );
    },

    clearCart: (state) => {
      state.cartList = [];
    },
    removeCartItem:(state,action)=>{
       state.cartList= state.cartList.filter(each=>each.id!==action.payload)
      
    }
  },
});

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
const productInitialData={products:[],apiStatus:apiStatusConstants.initial}



const productApiSlice=createSlice({
name:"productAPi",
initialState:productInitialData,
extraReducers:(builders)=>{
  builders.addCase(getProducts.fulfilled,(state,action)=>{
state.products=action.payload
state.apiStatus=apiStatusConstants.success

  })
  builders.addCase(getProducts.rejected,(state)=>{

    state.products=[]
state.apiStatus=apiStatusConstants.failure

  })
  builders.addCase(getProducts.pending,(state)=>{
state.apiStatus=apiStatusConstants.inProgress


  })


}


})





const moodSlice=createSlice({
  name:"mode",
  initialState:false,
  reducers:{
    changeMode:(state)=>{
state=!state
    }
  }
})





const store = configureStore({
  reducer: {
    carListData: cartSlice.reducer,
    appMode:moodSlice.reducer,
    productsList:productApiSlice.reducer
  
  },
});
export default store;

export const  {changeMode}=moodSlice.actions


export const { removeCartItem,clearCart, addTocart, incrementTheProductQuality,decrementTheQuality } =
  cartSlice.actions;
