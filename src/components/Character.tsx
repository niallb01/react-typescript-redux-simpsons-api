import Name from "./Name"
import Image from "./Image"
import Quote from "./Quote"
import Like from "./Like"
import DeleteButton from "./DeleteButton"

type CharacterProps = {
  characterDirection: string
  quoteText: string
  nameText: string
  image: string
  // onDelete: (itemNo: string) => void
  onDelete: (itemNo: number) => void
  liked: boolean
  itemNo: number
  position: number
}

const Character = (props: CharacterProps) => {
  const {
    onDelete,
    characterDirection,
    quoteText,
    nameText,
    image,
    liked,
    itemNo,
  } = props

  return (
    <>
      <div className="like-btn-container">
        <DeleteButton
          // quoteText={quoteText}
          onDelete={onDelete}
          itemNo={itemNo}
        />
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
