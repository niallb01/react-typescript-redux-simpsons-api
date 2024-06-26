import Character from "./Character"
import { CharactersProps, CharsType } from "../types"

// type CharactersProps = {
//   handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
//   onDelete: (itemNo: string) => void
//   onNewState: () => void
//   filteredChars: CharsType[]
//   newState: string
// }

// type CharsType = {
//   characterDirection: string
//   character: string
//   quote: string
//   image: string
//   liked: boolean
// }

const Characters = (props: CharactersProps) => {
  const { handleSearchInput, onDelete, filteredChars, newState, onNewState } =
    props
  // && = if characters isn't undefined then try and render characters - means characters doesn't depend on app component
  console.log("characters", props)

  return (
    <>
      <h1 className="header">Simpsons Quote Generator</h1>
      <div className="search-restore-bar">
        <input
          className="search-input"
          placeholder="Search Character..."
          onInput={handleSearchInput}
        ></input>
        <button value={newState} onClick={onNewState} className="new-state-btn">
          New Quotes
        </button>
      </div>

      <div className="chars-container">
        {filteredChars &&
          filteredChars.map((character: CharsType, position: number) => {
            return (
              <div className="character" key={character.quote + position}>
                <Character
                  liked={character.liked}
                  onDelete={onDelete}
                  characterDirection={character.characterDirection}
                  nameText={character.character}
                  quoteText={character.quote}
                  image={character.image}
                  itemNo={position}
                />
              </div>
            )
          })}
      </div>
    </>
  )
}
export default Characters
