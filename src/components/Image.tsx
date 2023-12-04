type ImageProps = {
  image: string
}

const Image = (props: ImageProps) => {
  const { image } = props
  return (
    <>
      <img src={image} />
    </>
  )
}

export default Image
