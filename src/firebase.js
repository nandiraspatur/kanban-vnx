import { initializeApp } from 'firebase'

const app = initializeApp({
  authDomain: 'https://kanban-vnx.firebaseapp.com',
  databaseURL: 'https://kanban-vnx.firebaseio.com'
})

export const db = app.database()

export const kanbanref = db.ref('kanban-vnx')
