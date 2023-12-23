import { useRouter } from 'next/router';

import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentSizeCard = ({ size, handleSearchSize = () => {} }) => {
  const router = useRouter();
  const existedSize = router?.query?.size || '';

  return (
    <BrowsePageComponentCheckboxInput
      name={size}
      onClick={() =>
        handleSearchSize(existedSize ? `${existedSize}_${size}` : size)
      }
    />
  );
};

export default BrowsePageComponentSizeCard;
