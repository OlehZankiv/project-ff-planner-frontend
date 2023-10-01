import { toUser } from './toUser'

export const toTask = ({
  _id,
  startAt,
  finishedAt,
  createdAt,
  endAt,
  title,
  assignedUser,
  priority,
  category,
}) => ({
  id: _id ?? '',
  createdAt: new Date(createdAt ?? new Date()),
  startAt: new Date(startAt ?? new Date()),
  finishedAt: finishedAt ? new Date(finishedAt) : null,
  // finishedInDeadline: !!finishedAt && !!endAt && new Date(finishedAt) <= new Date(endAt),
  finishedInDeadline: Math.random() > 0.5,
  endAt: new Date(endAt ?? new Date()),
  title: title ?? '',
  assignedUser: toUser(assignedUser ?? {}),
  priority: priority ?? 'low',
  category: category ?? 'in-progress',
  deadline: new Date(endAt ?? new Date()),
})

export const toTaskDTO = ({ id, startAt, endAt, ...instance }) => ({
  _id: id,
  startAt: startAt.getTime(),
  endAt: endAt.getTime(),
  ...instance,
})
