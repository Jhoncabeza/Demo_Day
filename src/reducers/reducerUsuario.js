import { types } from "../types/types";

const initialstate = {
    usuario: []
}

export const reducerData = (state = initialstate, action) => {
    switch (action.type) {
        case (types.usuario):
            return {
                ussuario: [...action.payload]
            }
        default:
            return state;
    }
}