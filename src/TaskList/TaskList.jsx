import Task from '../Task/Task';
import styles from './TaskList.module.css';

function TaskList({ tasksData, onChange }) {
  return (
    <div className={styles.list}>
      {tasksData.map(data => <Task
                                    text={data.text}
                                    data={data.date}
                                    key={data.id}
                                    status={data.status}
                                    onChange={onChange}
                                    id={data.id}
                                  />
      )}
    </div>
  )
}

export default TaskList;
