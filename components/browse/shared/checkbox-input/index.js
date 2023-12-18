import styles from '../../styles.module.scss';

const BrowsePageComponentCheckboxInput = ({ name }) => {
  return (
    <div className={styles.filter__sizes_size}>
      <input type="checkbox" name={`${name}`} id={name} />
      <label htmlFor={name}>
        {name?.length > 12 ? `${name?.substring(0, 12)}...` : name}
      </label>
    </div>
  );
};

export default BrowsePageComponentCheckboxInput;
