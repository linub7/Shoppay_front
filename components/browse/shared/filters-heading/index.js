import { IoRemoveOutline, IoAddOutline } from 'react-icons/io5';

const FiltersHeading = ({ heading, isShow = false, setIsShow = () => {} }) => {
  return (
    <h3>
      {heading}
      <span>
        {isShow ? (
          <IoRemoveOutline onClick={() => setIsShow(false)} />
        ) : (
          <IoAddOutline onClick={() => setIsShow(true)} />
        )}
      </span>
    </h3>
  );
};

export default FiltersHeading;
