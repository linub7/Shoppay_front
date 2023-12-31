import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentSizeCard = ({
  size,
  handleSearchSize = () => {},
  replaceQuery = () => {},
}) => {
  const result = replaceQuery('size', size);
  return (
    <BrowsePageComponentCheckboxInput
      name={size}
      onClick={() => handleSearchSize(result?.result)}
      checked={result?.check}
    />
  );
};

export default BrowsePageComponentSizeCard;
