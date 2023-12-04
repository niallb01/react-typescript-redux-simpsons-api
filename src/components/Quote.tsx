type QuoteProps = {
  text: string
}
const Quote = (props: QuoteProps) => {
  const { text } = props
  return (
    <>
      <p className="char-text">"{text}"</p>
    </>
  )
}

export default Quote
