import {
  deleteSubCategoryHandler,
  updateSubCategoryHandler,
} from 'actions/sub-category';
import SingularSelect from 'components/shared/selects/singular-select';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoPencil, IoTrash } from 'react-icons/io5';
import styles from '../../styles.module.scss';

const AdminSubCategoriesPageComponentSubCategoriesListItem = ({
  subCategory,
  token,
  setSubCategories,
  subCategoriesData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [parent, setParent] = useState('');
  const inputRef = useRef(null);

  const handleUpdateSubCategory = async (id) => {
    const { err, data } = await updateSubCategoryHandler(id, name, token);
    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    toast.success('Category updated Successfully 👍.');
    const filteredCategoryArray = subCategoriesData?.filter(
      (subCategory) => subCategory?._id !== id
    );
    setSubCategories([...filteredCategoryArray, data?.data?.data]);
    setName(data?.data?.data?.name);
    setIsOpen(false);
  };

  const handleDeleteCategory = async (id) => {
    if (window.confirm('Are you sure?')) {
      const { err, data } = deleteSubCategoryHandler(id, token);
      if (err) {
        console.log(err);
        toast.error(err);
        return;
      }
      toast.success('Sub Category deleted Successfully 👍.');
      const filteredCategoryArray = subCategoriesData?.filter(
        (subCategory) => subCategory?._id !== id
      );
      setSubCategories(filteredCategoryArray);
      setIsOpen(false);
    }
  };

  return (
    <li className={styles.list__item}>
      <input
        className={isOpen ? styles.open : ''}
        type="text"
        value={name ? name : subCategory?.name}
        onChange={(e) => setName(e.target.value)}
        disabled={!isOpen}
        ref={inputRef}
      />

      {isOpen && (
        <div className={styles.list__item_expand}>
          <button
            className={styles.btn}
            onClick={() => handleUpdateSubCategory(subCategory?._id)}
          >
            Save
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              setIsOpen(false);
              setName('');
            }}
          >
            Cancel
          </button>
        </div>
      )}
      <div className={styles.list__items_actions}>
        {!isOpen && (
          <IoPencil
            onClick={() => {
              setIsOpen(true);
              inputRef.current.focus();
            }}
          />
        )}
        <IoTrash onClick={() => handleDeleteCategory(subCategory?._id)} />
      </div>
    </li>
  );
};

export default AdminSubCategoriesPageComponentSubCategoriesListItem;
