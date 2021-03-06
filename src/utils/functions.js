import firebase from "./firebase";
import { getDatabase, set, ref, push } from "firebase/database"

export const addInfo = (info) => {
    const db = getDatabase
    const userRef = ref(db, "contact")
    const newUserRef = push(userRef)
    set(newUserRef, {
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    });
    
    console.log("veri eklendi");
}
