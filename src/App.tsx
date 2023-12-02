import axios from "axios"
import { useEffect } from "react"
import Characters from "./components/Characters"
import {
  SET_CHARACTERS,
  SET_SEARCH,
  DELETE,
} from "./features/counter/characterSlice"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// run unit tests on app

const App = () => {
  const characters = useSelector((state) => state.character.characters)
  const search = useSelector((state) => state.character.search)

  const dispatch = useDispatch()

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

  // character type is object
  const filteredChars = characters.filter((character) => {
    // console.log(typeof character)
    return character.character.toLowerCase().includes(search.toLowerCase())
  })

  const onDelete = (itemNo: string) => {
    // console.log("delete btn", itemNo)
    dispatch(DELETE(itemNo))
  }

  const onNewState = () => {
    getApiData()
    // console.log(typeof onNewState)
  }

  return (
    <>
      <ToastContainer limit={1} />
      {filteredChars.length === 0 && (
        <p className="chars-result-text">There are no results...</p>
      )}
      <Characters
        filteredChars={filteredChars}
        // characters={characters}
        onDelete={onDelete}
        handleSearchInput={handleSearchInput}
        onNewState={onNewState}
      />
    </>
  )
}

export default App
