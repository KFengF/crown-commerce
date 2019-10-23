import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/* Estos 2 ultimos seran adjuntados a la variable firebase */

const config = {
    //Borrado
}

firebase.initializeApp(config);
/* Este es el constructor para iniciar el firebase.app() */

const auth = firebase.auth();
const firestore = firebase.firestore();
//Iniciando el firebase.auth.auth y firebase.firestore.firestore

const provider = new firebase.auth.GoogleAuthProvider();
//Iniciando el provedor de autenticacion con google
provider.setCustomParameters({ prompt: 'select_account' });
//Opcion que permite al usuario elegir cual correo usar entre sus correos

const signInWithGoogle = () => auth.signInWithPopup(provider);
//funcion que abre un popup para logear

const createUserDoc = async (userAuth, additionalData) => {
    /* userAuth es un objeto general del usuario autenticado y contiene
    un monton de propiedades, entre esta el displayName, email, y a 
    traves de esta se puede obtener el documentReference */

    const docRef = firestore.doc(`users/${ userAuth.uid }`);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) { //creo que en el condicional se necesita un && addtionalData
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
    return docRef;
}

export { auth, firestore, signInWithGoogle, createUserDoc }
export default firebase;