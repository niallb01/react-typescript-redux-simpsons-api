export type CharType = {
  characterDirection: string
  character: string
  quote: string
  image: string
  liked: boolean
  itemNo: number
}

export type CharactersProps = {
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete: (itemNo: string) => void
  onNewState: () => void
  filteredChars: CharsType[]
  newState: string
}

export type CharsType = {
  characterDirection: string
  character: string
  quote: string
  image: string
  liked: boolean
}

export type CharacterProps = {
  characterDirection: string
  quoteText: string
  nameText: string
  image: string
  onDelete: (itemNo: string) => void
  liked: boolean
  itemNo: number
}

export type LikeProps = {
  liked: boolean
  quoteText: string
}
