import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentPatternCard = ({
  pattern,
  handleSearchPattern = () => {},
  replaceQuery = () => {},
}) => {
  const result = replaceQuery('pattern', pattern);
  return (
    <BrowsePageComponentCheckboxInput
      name={pattern}
      onClick={() => handleSearchPattern(result?.result)}
      checked={result?.check}
    />
  );
};

export default BrowsePageComponentPatternCard;
