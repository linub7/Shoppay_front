import { useState } from 'react';
import { IoRemoveOutline, IoAddOutline } from 'react-icons/io5';

const BrowsePageComponentCategoryCard = ({
  item,
  handleSearchCategory = () => {},
}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <section>
        <li onClick={() => handleSearchCategory(item?._id)}>
          <input type="radio" name="filter" id={item?._id} />
          <label htmlFor={item?._id}>
            <a>{item?.name}</a>
          </label>
          <span>
            {isShow ? (
              <IoRemoveOutline size={15} />
            ) : (
              <IoAddOutline size={15} />
            )}
          </span>
        </li>
      </section>
    </>
  );
};

export default BrowsePageComponentCategoryCard;
