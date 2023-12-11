type DeleteProps = {
  // quoteText: string
  // onDelete: (quoteText: string) => void

  itemNo: number
  onDelete: (itemNo: number) => void
}

const DeleteButton = (props: DeleteProps) => {
  const { onDelete, itemNo } = props
  return (
    <>
      <button
        className="delete-char"
        onClick={() => {
          onDelete(itemNo)
        }}
      >
        X
      </button>
    </>
  )
}

export default DeleteButton
