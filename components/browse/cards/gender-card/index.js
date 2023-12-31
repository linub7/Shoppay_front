import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentGenderCard = ({
  gender,
  handleSearchGender = () => {},
  replaceQuery = () => {},
}) => {
  const result = replaceQuery('gender', gender);
  return (
    <BrowsePageComponentCheckboxInput
      name={gender}
      onClick={() => handleSearchGender(result?.result)}
      checked={result?.check}
    />
  );
};

export default BrowsePageComponentGenderCard;
