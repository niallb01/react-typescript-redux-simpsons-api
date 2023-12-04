type NameProps = {
  text: string
}

const Name = (props: NameProps) => {
  const { text } = props
  return (
    <>
      <h4 className="char-name">{text}</h4>
    </>
  )
}

export default Name
