// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCsHz1r9YxpV81KesDipZpTOXwPmUz89qY",
  authDomain: "fb-sample-c7868.firebaseapp.com",
  projectId: "fb-sample-c7868",
  storageBucket: "fb-sample-c7868.appspot.com",
  messagingSenderId: "1061416113989",
  appId: "1:1061416113989:web:7ca16c01b805dfcb09502c",
  measurementId: "G-XMXYQEN8MH"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 