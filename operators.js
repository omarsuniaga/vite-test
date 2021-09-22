import db from "./firebaseConfig.js";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore";

const datos = collection(db, "app");

export const obtenerDatos = async () => {
  const consulta = await getDocs(collection(db, "app"));
  consulta.docs.forEach((doc) => {
    return doc.data();
  });
};

export const createUser = async (user) => {
  await setDoc(doc(datos), {
    name: user.name,
    email: user.email,
    pass1: user.pass1,
  });
  return datos.add(user);
};

// export const getUser = async (id) => {
//   const user = await usersCollection.doc(id).get();
//   return user.exists ? user.data() : null;
// };

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user);
// };

// export const deleteUser = (id) => {
//   return usersCollection.doc(id).delete();
// };

// export const useLoadUsers = () => {
//   const users = ref([]);
//   const close = usersCollection.onSnapshot((snapshot) => {
//     users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   });
//   onUnmounted(close);
//   return users;
// };
