import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { editorReducer } from './editorReducer';

export const rootReducer = combineReducers({
    projects: projectsReducer,
    editor: editorReducer
});

export type RootState = ReturnType<typeof rootReducer>;