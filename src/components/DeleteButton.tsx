type DeleteProps = {
  quoteText: string
  // onDelete: (quoteText: string) => void
  // quoteText: string
  // itemNo: number
  onDelete: (quoteText: string) => void
}

const DeleteButton = (props: DeleteProps) => {
  const { onDelete, quoteText } = props
  return (
    <>
      <button
        className="delete-char"
        onClick={() => {
          onDelete(quoteText)
        }}
      >
        X
      </button>
    </>
  )
}

export default DeleteButton
