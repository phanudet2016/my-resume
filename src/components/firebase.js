import firebase from 'firebase/app'
import 'firebase/database'
var config = {
  apiKey: 'AIzaSyAapq5toPAFFd1-sIGdAuOeWLaakhCWuuM',
  authDomain: 'my-resume-9e130.firebaseapp.com',
  databaseURL: 'https://my-resume-9e130.firebaseio.com',
  projectId: 'my-resume-9e130',
  storageBucket: 'my-resume-9e130.appspot.com',
  messagingSenderId: '263868899056'
}
firebase.initializeApp(config)

export const db = firebase.database()
export const contactRef = db.ref('contact')
export const UrlDowloadFileRef = db.ref('UrlDowloadFile')
