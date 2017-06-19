import * as types from '../actions/notificationActions';

export default function notifications(state = [], action) {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      return [...state,
        ...action.notification
      ];

    case types.REMOVE_NOTIFICATIONS:
      return {}

    default:
      return state
  }
}
