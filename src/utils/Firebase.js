import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
export class Firebase {
  constructor() {
    this._config = {
      apiKey: "AIzaSyC2zaUyQdwrCUZrh8PgkXIAf4TS0GsChj8",
      authDomain: "whatsappclone-6ddad.firebaseapp.com",
      projectId: "whatsappclone-6ddad",
      storageBucket: "whatsappclone-6ddad.appspot.com",
      messagingSenderId: "729509424501",
      appId: "1:729509424501:web:d7ae5071da32c05624373c",
    };
    this.init();
  }

  init() {
    if (!window._initializedFirebase) {
      firebase.initializeApp(this._config);
      firebase.firestore().settings({
        timestampsSnapshots: true
      })
      window._initializedFirebase = true;
    }
  }

  static db() {
    return firebase.firestore();
  }

  static hd() {
    return firebase.storage();
  }

  initAuth() {
    return new Promise((s, f) => {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(result => {
        let token = result.credential.accessToken;
        let user = result.user;
        s({user, token})
      })
      .catch(err=>{
        f(err)
      })
    })
  }
}
