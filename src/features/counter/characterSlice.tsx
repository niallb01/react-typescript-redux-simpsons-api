import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type CharType = {
  characterDirection: string
  character: string
  quote: string
  image: string
  liked: boolean
  itemNo: number
  position: number
}

type InitialState = {
  characters: CharType[]
  search: string
  like: boolean
}

const initialState: InitialState = {
  characters: [],
  search: "",
  like: false,
}

// reducer - does something based on action - modifies the state
export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    SET_CHARACTERS: (state, action: PayloadAction<CharType[]>) => {
      state.characters = action.payload
    },
    SET_SEARCH: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },

    // DELETE: (state, action: PayloadAction<string>) => {
    //   const index = state.characters.findIndex((item) => {
    //     return item.quote === action.payload
    //   })
    //   state.characters.splice(index, 1)
    // },

    // every item/quote has an itemNo in chars array
    DELETE: (state, action: PayloadAction<number>) => {
      const index = state.characters.findIndex((item) => {
        return item.itemNo === action.payload
      })

      state.characters.splice(index, 1)
    },

    SET_LIKE: (
      state,
      action: PayloadAction<{ quote: string; liked: boolean }>,
    ) => {
      const index = state.characters.findIndex((item) => {
        return item.quote === action.payload.quote
      })
      state.characters[index].liked = action.payload.liked
    },
  },
})

// action creators are generated for each case reducer function - deconstructed from above
export const { SET_CHARACTERS, SET_SEARCH, DELETE, SET_LIKE } =
  characterSlice.actions

export default characterSlice.reducer
