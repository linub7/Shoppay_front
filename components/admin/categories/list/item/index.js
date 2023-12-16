import { useCallback, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoPencil, IoTrash } from 'react-icons/io5';

import { deleteCategoryHandler, updateCategoryHandler } from 'actions/category';
import styles from '../../styles.module.scss';

const AdminCategoriesPageComponentCategoriesListItem = ({
  category,
  token,
  setCategories,
  categoriesData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const handleUpdateCategory = useCallback(async () => {
    const { err, data } = await updateCategoryHandler(
      category?._id,
      name,
      token
    );
    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    toast.success('Category updated Successfully 👍.');
    const filteredCategoryArray = categoriesData?.filter(
      (cat) => cat?._id !== category?._id
    );
    setCategories([...filteredCategoryArray, data?.data?.data]);
    setName(data?.data?.data?.name);
    setIsOpen(false);
  }, [categoriesData, category?._id, name, token]);

  const handleDeleteCategory = async (id) => {
    if (window.confirm('Are you sure?')) {
      const { err, data } = deleteCategoryHandler(id, token);
      if (err) {
        console.log(err);
        toast.error(err);
        return;
      }
      toast.success('Category deleted Successfully 👍.');
      const filteredCategoryArray = categoriesData?.filter(
        (category) => category?._id !== id
      );
      setCategories(filteredCategoryArray);
      setIsOpen(false);
    }
  };

  return (
    <li className={styles.list__item}>
      <input
        className={isOpen ? styles.open : ''}
        type="text"
        value={name ? name : category?.name}
        onChange={(e) => setName(e.target.value)}
        disabled={!isOpen}
        ref={inputRef}
      />
      {isOpen && (
        <div className={styles.list__item_expand}>
          <button className={styles.btn} onClick={() => handleUpdateCategory()}>
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
        <IoTrash onClick={() => handleDeleteCategory(category?._id)} />
      </div>
    </li>
  );
};

export default AdminCategoriesPageComponentCategoriesListItem;
