import Task from '../Task/Task';
import PropTypes from 'prop-types';
import { taskData } from '../types';
import styles from './TaskList.module.css';

TaskList.propTypes = {
  tasksData: PropTypes.arrayOf(taskData).isRequired,
  onChange: PropTypes.func.isRequired
}

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
