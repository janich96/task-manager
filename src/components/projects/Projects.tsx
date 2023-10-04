import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addProjectAction, removeProjectAction } from "../../store/reducers/projectsReducer";
import { ProjectsArray } from "../../types/projectTypes";
import { Link } from "react-router-dom";
import styles from './Projects.module.scss';

const Projects = () => {

    const dispatch = useDispatch();
    const projectsArr = useTypedSelector((state) => state.projects);
    const addProject = (title: string) => {
        if (title) {
            const project: ProjectsArray = {
                title,
                id: Math.random()
            }
            dispatch(addProjectAction(project));
        } else {
            alert('Please write project\'s title');
        }
    }
    const removeProject = (id: number) => {
        dispatch(removeProjectAction(id));
    }

    return (
        <div>
            <button 
                className={styles.button} 
                onClick={() => addProject(prompt('Write project title')!)}
            >Add project
            </button>
            <section className={styles.projectsSection}>
                {
                    // @ts-ignore
                    projectsArr.projects.map((project: ProjectsArray) => (
                        <div className={styles.projectItem} key={project.id}>
                            <Link 
                                className={styles.projectTitle} 
                                to={`/projects/${project.id}`}
                            >{project.title}
                            </Link>
                            <button 
                                className={`${styles.button} ${styles.projectBtn}`}
                                onClick={() => removeProject(project.id)}
                            >remove
                            </button>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Projects;