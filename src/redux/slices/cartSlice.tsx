import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemsObj } from '../../components/Reproduction/models/type';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const totalPrice = (state: any) => { 
  
  state.totalPrice = state.cartPictures.reduce((sum: number, obj: CartItemsObj) => { 
    return (obj.price * obj.count) + sum
    }, 0)
}


interface cartState { 
  cartPictures: CartItemsObj[],
  totalPictures: number,
  totalPrice: number
}

const initialState: cartState = {
  cartPictures: [],
  totalPictures: 0,
  totalPrice: 0,
}




export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItemsObj>) { 

      const findItem: CartItemsObj | undefined = state.cartPictures.find((obj: CartItemsObj) => obj.id == action.payload.id);

            if (findItem) {
                findItem.count++;
                state.totalPictures++
                
              } 
            
            else {
              state.cartPictures.push({ ...action.payload, count: 1 });
              state.totalPictures++
            } 

            totalPrice(state)
    },


    plusPicture(state, action: PayloadAction<string>) { 
      
      const findItem: CartItemsObj | undefined = state.cartPictures.find((obj: CartItemsObj) => obj.id == action.payload);
      
      
      if (findItem) {
        findItem.count++;
        state.totalPictures++
      } 
      
      totalPrice(state)
    

    },
    
    
    minusPicture: (state, action) => { 
      const findItem: CartItemsObj | undefined = state.cartPictures.find((obj: CartItemsObj) => obj.id == action.payload);
      
      if (findItem) {
        findItem.count--;
        state.totalPictures--
      } 


      totalPrice(state)
    
    },

    removeItem: (state, action) => { 
      state.cartPictures = state.cartPictures.filter((obj) => obj.id !== action.payload)
      
      state.totalPictures--
      
      totalPrice(state)
  }      
  
  },
})

export const { addToCart,plusPicture,minusPicture, removeItem } = cartSlice.actions

export default cartSlice.reducer