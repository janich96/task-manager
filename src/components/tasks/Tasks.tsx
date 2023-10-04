import EditorComponent from "../editor/EditorComponent";
import styles from './Tasks.module.scss';

const Tasks = () => {
    return (
        <div className={styles.tasksWrapper}>
            <EditorComponent />
        </div>
    )
}

export default Tasks;