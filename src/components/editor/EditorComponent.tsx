import { Editor } from "react-draft-wysiwyg";
import { useDispatch } from "react-redux";
import { EditorState, convertFromRaw} from "draft-js";
import { addTaskAction } from "../../store/reducers/editorReducer";
import { loadEditorState, saveEditorState } from "../../localStorage";
import { useState } from "react";
import Modal from "../modal/Modal";
import './editor.css';
import styles from './Editor.module.scss';

// Здесь не успел разобраться с сохранением состояния из библиотеки 
// текстового редактора в redux и, соответственно, в localStorage

const EditorComponent = () => {
    const [content, setContent] = useState(EditorState.createEmpty());
    const dispatch = useDispatch();

    const saveEditorContent = () => {
        const contentStateJSON = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
        console.log(contentStateJSON);
        saveEditorState(contentStateJSON);
        dispatch(addTaskAction(contentStateJSON));
    }

    const loadEditorContent = () => {
        const contentStateJSON = loadEditorState();
        if (contentStateJSON) {
            const contentState = convertFromRaw(contentStateJSON);
            const newEditorState = EditorState.createWithContent(contentState);
            dispatch(addTaskAction(newEditorState));
        }
        
    }

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    return (
        <div>
            <button className={styles.button} type="button" onClick={openModal}>
                Create task
            </button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Editor 
                    editorState={content}
                    onEditorStateChange={setContent}
                />
                <button className={styles.button} onClick={saveEditorContent}>Save task</button>
                <button className={styles.button} onClick={loadEditorContent}>Load content</button>
            </Modal>
        </div>
    )
}

export default EditorComponent;