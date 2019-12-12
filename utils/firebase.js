import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCMZ1oMr54BgM4AjH8eOVCkU-WW-vp8Pfw',
  authDomain: 'segurusp-top.firebaseapp.com',
  databaseURL: 'https://segurusp-top.firebaseio.com',
  projectId: 'segurusp-top',
  storageBucket: 'segurusp-top.appspot.com',
  messagingSenderId: '297044981755',
  appId: '1:297044981755:web:b08d738747072d79e57d5e',
  measurementId: 'G-X6YPQ0NMJ7',
};
export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

export const getDataList = (callback) => {
  let query = firebaseDatabase.ref('ocorrencia/')
  query.on('value', dataSnapshot=>{
    let items =[]
    dataSnapshot.forEach(el =>{
      let item = el.val()
      item['key'] = el.key
      items.push(item)
    })
    callback(items)
  })
  return query
};

export const writePoint = (data) => {
  
  firebaseDatabase
    .ref('ocorrencia/')
    .push({
      latitude: data.latitude,
      longitude: data.longitude,
      descricao: data.desc,
      peso: data.peso,
      data:data.data,
      hora:data.hora
    })
    .then(data => {
      console.log('data', data);
    })
    .catch(error => {
      console.log('Firebase error', error);
    });
};



export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
