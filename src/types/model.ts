export interface Model {
  id: string
  name: string
  description: string
  url: string
  thumbnailUrl: string
  designer: string
  category: string
}

export type Vote = 'like' | 'dislike' | 'skip'

export interface VoteData {
  modelId: string
  userId: string
  userEmail: string
  vote: Vote
  timestamp: number
}