// funciones asincronicas para el CRUD

import {collection, addDoc, updateDoc, deleteDoc} from "firebase/firestore"
import { db} from "../firebase/firebaseConfig"
import { types } from "../types/types"
import Swal from "sweetalert2"
import { taskReducer } from "../reducers/taskReducer"

export const TaskNew = (tasks) => {
    return async (dispatch, getSate) => {
        // para traer del estado algo del reducer
        const id = getSate().login.id
        const newTask = {
            url:tasks.url,
            nombre: tasks.nombre,
            descripcion: tasks.descripcion
        }
        // await addDoc(collection)
        await addDoc(collection(db,`${id}/tasks/data`), newTask)
        dispatch(addNewTask(newTask))
    }
}

export const addNewTask = (tasks) =>({
    type:types.taksAddNews,
    payload:{
        ...tasks
    }
})

