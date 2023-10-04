import { ProjectsState, ProjectActionTypes, ProjectsAction, ProjectsArray } from "../../types/projectTypes";

const initialState: ProjectsState = {
    projects: []
}

export const projectsReducer = (state = initialState, action: ProjectsAction) => {
    switch (action.type) {
        case ProjectActionTypes.ADD_PROJECT: 
            return {...state, projects: [...state.projects, action.payload]};
        case ProjectActionTypes.REMOVE_PROJECT: 
            return {...state, projects: state.projects.filter((project) => project.id !== action.payload)}
        default: 
            return state;
    }
}

export const addProjectAction = (payload: ProjectsArray) => ({type: ProjectActionTypes.ADD_PROJECT, payload});
export const removeProjectAction = (payload: number) => ({type: ProjectActionTypes.REMOVE_PROJECT, payload})