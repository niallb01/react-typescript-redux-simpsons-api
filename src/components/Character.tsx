import Name from "./Name"
import Image from "./Image"
import Quote from "./Quote"
import Like from "./Like"
import DeleteButton from "./DeleteButton"
import { CharacterProps } from "../types"

const Character = (props: CharacterProps) => {
  const { onDelete, characterDirection, quoteText, nameText, image, liked } =
    props

  return (
    <>
      <div className="like-btn-container">
        <DeleteButton quoteText={quoteText} onDelete={onDelete} />
        <Like quoteText={quoteText} liked={liked} />
      </div>

      <div className="flex-container">
        {characterDirection === "Right" ? (
          <>
            <Name text={nameText} />
            <Quote text={quoteText} />
            <Image image={image} />
          </>
        ) : (
          <>
            <Image image={image} />
            <Name text={nameText} />
            <Quote text={quoteText} />
          </>
        )}
      </div>
    </>
  )
}

export default Character
