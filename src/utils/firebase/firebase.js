import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/* Estos 2 ultimos seran adjuntados a la variable firebase */

const config = {
    apiKey: "AIzaSyAqYvDfV0gb6ZJNKT_aBCE9tEcTOo2j3_g",
    authDomain: "crown-db-d428e.firebaseapp.com",
    databaseURL: "https://crown-db-d428e.firebaseio.com",
    projectId: "crown-db-d428e",
    storageBucket: "crown-db-d428e.appspot.com",
    messagingSenderId: "426980443337",
    appId: "1:426980443337:web:0989c54ab0080ec4f87918",
    measurementId: "G-P72VNBVX63"
}

firebase.initializeApp(config);
/* Este es el constructor para iniciar el firebase.app() */

const auth = firebase.auth();
const firestore = firebase.firestore();
//Iniciando el firebase.auth.auth y firebase.firestore.firestore

const provider = new firebase.auth.GoogleAuthProvider();
//Iniciando el proveedor de autenticacion con google
provider.setCustomParameters({ prompt: 'select_account' });
//Opcion que permite al usuario elegir cual correo usar entre sus correos

const signInWithGoogle = () => auth.signInWithPopup(provider);
//funcion que abre un popup para logear con la autenticacion de google como argumento

const createUserDoc = async (userAuth, additionalData) => {
    /* userAuth seria un objeto general del usuario autenticado y contiene
    un monton de propiedades, entre esta el displayName, email, y a 
    traves de esta se puede obtener el documentReference */

    const docRef = firestore.doc(`users/${ userAuth.uid }`);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) { //Este if no es necesario pero por si acaso
        const { displayName, email } = userAuth;
        const createdDate = new Date();

        try {
            await docRef.set({
                //Creando el usuario en firestore
                displayName,
                email,
                createdDate,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
}

const getUserDocReference = (userAuth) => firestore.doc(`users/${ userAuth.uid }`);

const addCollsAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    //Obtenemos un puntero a la ruta

    const batch = firestore.batch();
    /* La idea es agreagar datos al firestore, se puede agregar 
    uno por uno pero al haber error de conexion estos datos se
    quedan en el aire, entonces usamos batch que envia los datos
    una sola vez */

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        //Esto genera un nuevo id unico para el documento
        batch.set(newDocRef, obj);
        //agregando objeto al lote(batch)
    });

    return await batch.commit() //mandando la info que seria una promesa
}

const convertCollsToMap = snapshot => {
    const newDataArray = snapshot.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title),
            id: doc.id,
            title,
            items
        }
    });

    return newDataArray.reduce((accumulator, data) => {
        accumulator[data.title] = data;
        return accumulator;
    }, {});
}

export { auth, firestore, signInWithGoogle,
    createUserDoc, getUserDocReference, addCollsAndDocs,
    convertCollsToMap
}
export default firebase;