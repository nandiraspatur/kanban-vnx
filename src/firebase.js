import { initializeApp } from 'firebase'

const app = initializeApp({
  authDomain: 'https://vnx-project.firebaseapp.com',
  databaseURL: 'https://vnx-project.firebaseio.com'
})

export const db = app.database()

export const kanbanref = db.ref('kanban-vnx')
