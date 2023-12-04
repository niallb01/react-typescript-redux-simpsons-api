import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { SET_LIKE } from "../features/counter/characterSlice"

type LikeProps = {
  liked: boolean
  quoteText: string
}

const Like = (props: LikeProps) => {
  const dispatch = useDispatch()
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
