import { useTypedSelector } from "../../hooks/useTypedSelector";
import EditorComponent from "../editor/EditorComponent";
import styles from './Tasks.module.scss';

const Tasks = () => {
    const projectsArr = useTypedSelector((state) => state.projects);
    const getTitle = () => {
        const projectID: number = Number(window.location.pathname.slice(10));
        return projectsArr.projects.filter((project) => project.id === projectID);
    }
    const projectTitle = getTitle();
    return (
        <div className={styles.tasksWrapper}>
            <h2 className={styles.projectTitle}>{projectTitle[0].title}</h2>
            <EditorComponent />
        </div>
    )
}

export default Tasks;