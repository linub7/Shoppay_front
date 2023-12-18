import { IoRemoveOutline, IoAddOutline } from 'react-icons/io5';

const FiltersHeading = ({ heading, isShow = false }) => {
  return (
    <h3>
      {heading}
      <span>{isShow ? <IoRemoveOutline /> : <IoAddOutline />}</span>
    </h3>
  );
};

export default FiltersHeading;
