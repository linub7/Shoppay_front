import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoRemoveOutline, IoAddOutline } from 'react-icons/io5';

const BrowsePageComponentCategoryCard = ({
  item,
  handleSearchCategory = () => {},
}) => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <section>
        <li onClick={() => handleSearchCategory(item?._id)}>
          <input
            type="radio"
            name="filter"
            id={item?._id}
            checked={
              router?.query?.category?.toString() === item?._id?.toString()
            }
          />
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
