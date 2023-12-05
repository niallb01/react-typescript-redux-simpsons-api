import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import { useAppDispatch } from "../app/hooks"
import { SET_LIKE } from "../features/counter/characterSlice"

type LikeProps = {
  liked: boolean
  quoteText: string
}

const Like = (props: LikeProps) => {
  const dispatch = useAppDispatch()
  const { liked, quoteText } = props

  return (
    <button
      className="like-btn"
      onClick={() => {
        dispatch(SET_LIKE({ liked: !liked, quote: quoteText }))
        console.log(liked)
      }}
    >
      {liked ? (
        <span>
          <FaRegThumbsUp size="12" className="like-icon" />
          Liked
        </span>
      ) : (
        <span>
          <FaRegThumbsDown size="12" className="like-icon" />
          Disliked
        </span>
      )}
    </button>
  )
}

export default Like
