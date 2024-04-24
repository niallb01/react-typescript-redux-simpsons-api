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
import { CharType } from "./types"

export const App = () => {
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
      dispatch(SET_CHARACTERS(res.data)) //dispatch message to store
    } catch (error) {
      console.log("Error", error)
      toast.error("The API is down, please try again later.", {
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

  const filteredChars: CharType[] = characters.filter((character) => {
    return character.character.toLowerCase().includes(search.toLowerCase())
  })

  const onDelete = (itemNo: string) => {
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
        newState={""}
      />
    </>
  )
}

export default App
