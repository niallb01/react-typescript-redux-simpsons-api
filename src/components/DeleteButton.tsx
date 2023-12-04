type DeleteProps = {
  // quoteText: string
  // onDelete: (quoteText: string) => void
  quoteText: string
  // quoteNo: number
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

// type DeleteProps = {
//   deleteQuote: (quoteNo: number) => void;
//   quoteNo: number;
// };

// const DeleteQuote = (props: DeleteProps) => {
//   const { deleteQuote, quoteNo } = props;

//   return <button onClick={() => deleteQuote(quoteNo)}>+</button>;
// };

// export default DeleteQuote;
