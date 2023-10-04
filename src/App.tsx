import styles from './App.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import Projects from './components/projects/Projects';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <div className={styles.appWrapper}>
      <Link to='/'>
        <h1 className={styles.title}>Home</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/projects/:id' element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;
