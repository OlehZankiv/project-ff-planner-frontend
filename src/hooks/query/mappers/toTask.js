import { toUser } from './toUser'
import dayjs from 'dayjs'

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
  endAt: new Date(endAt ?? new Date()),
  title: title ?? '',
  assignedUser: toUser(assignedUser ?? {}),
  priority: priority ?? 'low',
  category: category ?? 'in-progress',
  deadline: dayjs(new Date(startAt ?? new Date()))
    .endOf('day')
    .toDate(),
})

export const toTaskDTO = ({ id, startAt, endAt, ...instance }) => ({
  _id: id,
  startAt: startAt.getTime(),
  endAt: endAt.getTime(),
  ...instance,
})
