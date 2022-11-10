import { Card } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import styles from './Task.module.css';

function Task({ status, onChange, id, text, data}) {
  const classNames = [styles.card];

  status === 'done' ? classNames.push(styles.done) : classNames.push(styles.inProgress);

  return (
    <div className={styles.wrapper}>
      <Checkbox onChange={() => onChange(id)} checked={status === 'done'} />
      <Card className={classNames.join(' ')}>
        <div className={styles.text}>
          {text}
        </div>
        <div className={styles.date}>
          {data}
        </div>
      </Card>
      <button className={styles.button}>x</button>
    </div>
  );
}

export default Task;
