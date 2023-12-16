/* eslint-disable @next/next/no-img-element */
import styles from '../../styles.module.scss';

const UserMenuInfos = ({ token, userData }) => {
  return token ? (
    <div className={styles.user__infos}>
      {userData?.photo?.url ? (
        <img src={userData?.photo?.url} alt={userData?.name} />
      ) : (
        <img
          src="https://imgurl.ir/uploads/i63605_temp-user.png"
          alt={userData?.name}
        />
        // <img src={'/images/temp-user.png'} alt={userData?.name} />
      )}

      <h4>{userData?.name}</h4>
    </div>
  ) : (
    <div className={styles.user__infos}>
      <img
        src="https://imgurl.ir/uploads/i63605_temp-user.png"
        alt={userData?.name}
      />
      {/* <img src={'/images/temp-user.png'} alt={userData?.name} /> */}
      <div className={styles.user__infos_btns}>
        <button>Register</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default UserMenuInfos;
