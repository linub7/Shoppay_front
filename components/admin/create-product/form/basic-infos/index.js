import AdminInput from 'components/shared/inputs/admin-input';
import styles from '../../styles.module.scss';

const AdminCreateProductPageComponentFormBasicInfos = ({ handleChange }) => {
  return (
    <>
      <div className={styles.header}>Basic Infos</div>
      <AdminInput
        type="text"
        label={'Name'}
        name={'name'}
        placeholder={'Product Name'}
        onChange={handleChange}
      />
      <AdminInput
        type="text"
        label={'Description'}
        name={'description'}
        placeholder={'Product Description'}
        onChange={handleChange}
      />
      <AdminInput
        type="text"
        label={'Brand'}
        name={'brand'}
        placeholder={'Product Brand'}
        onChange={handleChange}
      />
      <AdminInput
        type="text"
        label={'Sku'}
        name={'sku'}
        placeholder={'Product Sku/number'}
        onChange={handleChange}
      />
      <AdminInput
        type="number"
        label={'Discount'}
        name={'discount'}
        placeholder={'Product Discount'}
        onChange={handleChange}
      />
    </>
  );
};

export default AdminCreateProductPageComponentFormBasicInfos;
