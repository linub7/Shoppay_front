/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles.module.scss';

const AdminDashboardPageComponentDataUsersTable = ({ users }) => {
  return (
    <table>
      <tbody>
        {users?.map((user, i) => (
          <tr key={i}>
            <td className={styles.user}>
              <div className={styles.user__image}>
                <img
                  src={
                    user?.photo?.url
                      ? user?.photo?.url
                      : '/images/temp-user.png'
                  }
                  alt="user image"
                />
              </div>
            </td>
            <td>
              <h4>{user?.name}</h4>
              <span>{user?.email}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminDashboardPageComponentDataUsersTable;
