// type TextProps = {
//     quoteText: string;
//     nameText: string;
//     image: string;
//   };

const CharText = (props) => {
  const { quoteText, nameText, image } = props

  return (
    <>
      <p>{quoteText}</p>
      <p>{nameText}</p>
      <img src={image} alt="char" />
    </>
  )
}

export default Text
