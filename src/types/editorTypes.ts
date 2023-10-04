import { EditorState } from "draft-js"

export enum EditorActionTypes {
    ADD_TASK = 'ADD_TASK'
}

interface EditorActionAdd {
    type: EditorActionTypes.ADD_TASK,
    payload?: EditorState
}

export type EditorAction = EditorActionAdd;