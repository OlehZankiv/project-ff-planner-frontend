import { toReviewDTO, toUserDTO } from '../hooks/query/mappers/'

export const getReviews = (type) =>
  new Promise((res) =>
    setTimeout(
      () =>
        res({
          type,
          data: [
            toReviewDTO({
              id: '1',
              rating: 3,
              comment:
                'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
              createdAt: new Date(),
              updatedAt: new Date(),
              owner: toUserDTO({
                id: '1',
                name: 'Nadiia Doe',
                avatarURL: 'https://www.w3schools.com/w3images/avatar6.png',
                email: 'some@gmail.com',
              }),
            }),
            toReviewDTO({
              id: '2',
              rating: 4,
              comment:
                'GooseTrack is incredibly helpful, the sidebar with account management, calendar, and filter options make navigation seamless. Great for staying organized.',
              createdAt: new Date(),
              updatedAt: new Date(),
              owner: toUserDTO({
                id: '1',
                name: 'Nadiia Doe',
                avatarURL: 'https://www.w3schools.com/w3images/avatar6.png',
                email: 'some@gmail.com',
              }),
            }),
            toReviewDTO({
              id: '3',
              rating: 4,
              comment:
                'GooseTrack is incredibly helpful, the sidebar with account management, calendar, and filter options make navigation seamless. Great for staying organized.',
              createdAt: new Date(),
              updatedAt: new Date(),
              owner: toUserDTO({
                id: '1',
                name: 'Nadiia Doe',
                avatarURL: 'https://www.w3schools.com/w3images/avatar6.png',
                email: 'some@gmail.com',
              }),
            }),
          ],
        }),
      1000,
    ),
  )
