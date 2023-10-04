import { EditorState } from "draft-js";
import { ProjectsState } from "./types/projectTypes";

export const loadState = () => {
    try {
        const serialState = localStorage.getItem('appState');
        if (serialState === null) {
            return undefined;
        }
        return JSON.parse(serialState);
    } catch (error) {
        return error;
    }
}

export const saveState = (state: ProjectsState) => {
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem('appState', serialState);
    } catch (error) {
        console.log(error);
    }
}

export const loadEditorState = () => {
    try {
        const serialState = localStorage.getItem('taskState');
        if (serialState === null) {
            return undefined;
        }
    } catch (error) {
        return error;
    }
}

export const saveEditorState = (state: EditorState) => {
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem('taskState', serialState);
    } catch (error) {
        console.log(error);
    }
}