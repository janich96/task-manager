export interface ProjectsArray {
    id: number,
    title: string
}

export interface ProjectsState {
    projects: ProjectsArray[]
}

export enum ProjectActionTypes {
    ADD_PROJECT = 'ADD_PROJECT',
    REMOVE_PROJECT = 'REMOVE_PROJECT'
}

interface ProjectActionAdd {
    type: ProjectActionTypes.ADD_PROJECT,
    payload?: ProjectsArray[]
}

interface ProjectActionRemove {
    type: ProjectActionTypes.REMOVE_PROJECT,
    payload?: number
}

export type ProjectsAction = ProjectActionAdd | ProjectActionRemove;