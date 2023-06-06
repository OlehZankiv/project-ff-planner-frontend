import { toUser, toUserDTO } from './toUser'

export const toReview = ({ _id, comment, owner, rating, createdAt, updatedAt }) => ({
  id: _id ?? '',
  comment: comment ?? '',
  owner: toUser(owner ?? {}),
  rating: rating ?? 0,
  createdAt: createdAt ? new Date(createdAt) : new Date(),
  updatedAt: updatedAt ? new Date(updatedAt) : new Date(),
})

export const toReviewDTO = ({ id, owner, createdAt, updatedAt, comment, rating }) => ({
  _id: id,
  owner: toUserDTO(owner),
  createdAt: createdAt.getTime(),
  updatedAt: updatedAt.getTime(),
  comment,
  rating,
})
