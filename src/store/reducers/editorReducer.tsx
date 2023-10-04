import { EditorState } from "draft-js";
import { EditorAction, EditorActionTypes } from "../../types/editorTypes";

const initialState: EditorState = EditorState.createEmpty();

export const editorReducer = (state = initialState, action: EditorAction) => {
    switch (action.type) {
        case EditorActionTypes.ADD_TASK: 
            return {...state, ...action.payload};
        default: 
            return state;
    }
}

export const addTaskAction = (payload: EditorState) => ({type: EditorActionTypes.ADD_TASK, payload});