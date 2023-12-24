import { useRouter } from 'next/router';

import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentGenderCard = ({
  gender,
  handleSearchGender = () => {},
}) => {
  const router = useRouter();
  const existedGender = router?.query?.gender || '';
  return (
    <BrowsePageComponentCheckboxInput
      name={gender}
      onClick={() =>
        handleSearchGender(
          existedGender ? `${existedGender}_${gender}` : gender
        )
      }
    />
  );
};

export default BrowsePageComponentGenderCard;
