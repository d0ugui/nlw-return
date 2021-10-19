import logoImg from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos
            os tempos, vamos pra cima! 🔥🔥
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src="https://github.com/d0ugui.png" alt="Douglas Oliveira" />
              </div>
              <span>Douglas Oliveira</span>
            </div>
          </p>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos
            os tempos, vamos pra cima! 🔥🔥
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src="https://github.com/d0ugui.png" alt="Douglas Oliveira" />
              </div>
              <span>Douglas Oliveira</span>
            </div>
          </p>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos
            os tempos, vamos pra cima! 🔥🔥
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src="https://github.com/d0ugui.png" alt="Douglas Oliveira" />
              </div>
              <span>Douglas Oliveira</span>
            </div>
          </p>
        </li>
      </ul>
    </div>
  );
}
