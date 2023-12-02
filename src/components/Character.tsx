import Name from "./Name"
import Image from "./Image"
import Quote from "./Quote"
import DeleteButton from "./DeleteButton"
import Like from "./Like"

type CharacterProps = {
  characterDirection: string
  quoteText: string
  nameText: string
  image: string
  onDelete: () => void
  liked: boolean
}

const Character = (props: CharacterProps) => {
  const { onDelete, characterDirection, quoteText, nameText, image, liked } =
    props

  // console.log("character", typeof liked)

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
