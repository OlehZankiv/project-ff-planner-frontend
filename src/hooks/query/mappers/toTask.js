import { toUser } from './toUser'

export const toTask = ({ _id, startAt, endAt, title, assignedUser, priority, category }) => ({
  id: _id ?? '',
  startAt: new Date(startAt),
  endAt: new Date(endAt),
  title: title ?? '',
  assignedUser: toUser(assignedUser ?? {}),
  priority: priority ?? 'low',
  category: category ?? 'in-progress',
})

export const toTaskDTO = ({ id, startAt, endAt, ...instance }) => ({
  _id: id,
  startAt: startAt.getTime(),
  endAt: endAt.getTime(),
  ...instance,
})
