import axios from "axios"
import { useEffect } from "react"
import Characters from "./components/Characters"
import {
  SET_CHARACTERS,
  SET_SEARCH,
  DELETE,
} from "./features/counter/characterSlice"
import "./App.css"
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// run unit tests on app
import CharType from "./features/counter/characterSlice"

// type here? should be coming from the store?
type CharType = {
  characterDirection: string
  character: string
  quote: string
  image: string
  liked: boolean
  itemNo: number
  position: number
}

const App = () => {
  const characters = useAppSelector((state) => state.character.characters)
  const search = useAppSelector((state) => state.character.search)

  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiData()
  }, [])

  async function getApiData() {
    try {
      const res = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=20",
      )
      dispatch(SET_CHARACTERS(res.data))
    } catch (error) {
      console.log("Error", error)
      toast.error("The Api is down, please try again later.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SET_SEARCH(e.target.value))
  }

  if (!characters) return <p>Loading...</p>

  // this shouldn't be type any! I know it's an array of objects
  const filteredChars = characters.filter((character) => {
    return character.character.toLowerCase().includes(search.toLowerCase())
  })

  // itemNo should be number! in characterSlice PayloadAction is <string> - quote
  const onDelete = (itemNo: string) => {
    // console.log("delete btn", typeof itemNo)
    dispatch(DELETE(itemNo))
  }

  const onNewState = () => {
    getApiData()
  }

  return (
    <>
      <ToastContainer limit={1} />
      {filteredChars.length === 0 && (
        <p className="chars-result-text">There are no results...</p>
      )}
      <Characters
        filteredChars={filteredChars}
        onDelete={onDelete}
        handleSearchInput={handleSearchInput}
        onNewState={onNewState}
        // below - squiffy
        newState={""}
        itemNo={0}
        position={0}
      />
    </>
  )
}

export default App
