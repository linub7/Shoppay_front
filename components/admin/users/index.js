import AdminLayout from '../layout';
import AdminDataTable from './table';
import styles from './styles.module.scss';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  deleteUserByAdminHandler,
  updateUserByAdminHandler,
} from 'actions/users';
import { useSelector } from 'react-redux';

const AdminUsersPageComponent = ({ users }) => {
  const [rows, setRows] = useState(users);

  const { token } = useSelector((state) => state.auth);

  const handleDeleteUser = async (user) => {
    if (window.confirm(`Are you sure you want to delete ${user?.name}?`)) {
      const { err, data } = await deleteUserByAdminHandler(user?._id, token);
      if (err) {
        console.log(err);
        toast.error(err);
        return;
      }
      const filteredUsersArray = rows?.filter((row) => row._id !== user?._id);
      setRows(filteredUsersArray);
    }
  };

  const handleVerifiedUser = async (user) => {
    if (
      window.confirm(
        user?.isVerified
          ? `Are you sure you want to change verification of ${user?.name} to not verified?`
          : `Are you sure you want to change verification of ${user?.name} to verified?`
      )
    ) {
    }
    const payload = user?.isVerified
      ? { isVerified: false }
      : { isVerified: true };

    const { err, data } = await updateUserByAdminHandler(
      user?._id,
      payload,
      token
    );
    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    const filteredUsersArray = rows?.filter((row) => row._id !== user?._id);
    setRows([...filteredUsersArray, data?.data?.data]);
  };

  const handleChangeUserRole = async (user) => {
    if (
      window.confirm(
        user?.role === 'sub-admin'
          ? `Are you sure you want to change role of ${user?.name} to user role?`
          : `Are you sure you want to change role of ${user?.name} to sub-admin role?`
      )
    ) {
      const payload =
        user?.role === 'sub-admin' ? { role: 'user' } : { role: 'sub-admin' };

      const { err, data } = await updateUserByAdminHandler(
        user?._id,
        payload,
        token
      );
      if (err) {
        console.log(err);
        toast.error(err);
        return;
      }
      const filteredUsersArray = rows?.filter((row) => row._id !== user?._id);
      setRows([...filteredUsersArray, data?.data?.data]);
    }
  };
  return (
    <AdminLayout>
      <AdminDataTable
        rows={rows}
        handleDeleteUser={handleDeleteUser}
        handleVerifiedUser={handleVerifiedUser}
        handleChangeUserRole={handleChangeUserRole}
      />
    </AdminLayout>
  );
};

export default AdminUsersPageComponent;
