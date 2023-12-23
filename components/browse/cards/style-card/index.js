import { useRouter } from 'next/router';

import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentStyleCard = ({
  style,
  handleSearchStyle = () => {},
}) => {
  const router = useRouter();
  const existedStyle = router?.query?.style || '';
  return (
    <BrowsePageComponentCheckboxInput
      name={style}
      onClick={() =>
        handleSearchStyle(existedStyle ? `${existedStyle}_${style}` : style)
      }
    />
  );
};

export default BrowsePageComponentStyleCard;
