export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATIONS = 'REMOVE_NOTIFICATIONS';

export function addNotification(id, title, body, icon, lang, dir){
  return {
    type: ADD_NOTIFICATION,
    notification:{
      id: id,
      title: title,
      body: body,
      icon: icon,
      lang: lang,
      dir: dir
    }
  }
}

export function removeNotifications(){
  return{
    type: REMOVE_NOTIFICATIONS
  }
}
