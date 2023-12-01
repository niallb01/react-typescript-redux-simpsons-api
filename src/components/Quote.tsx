const Quote = (props) => {
  const { text } = props
  return (
    <>
      <p className="char-text">"{text}"</p>
    </>
  )
}

export default Quote
