import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentStyleCard = ({
  style,
  handleSearchStyle = () => {},
  replaceQuery = () => {},
}) => {
  const result = replaceQuery('style', style);
  return (
    <BrowsePageComponentCheckboxInput
      name={style}
      onClick={() => handleSearchStyle(result?.result)}
      checked={result?.check}
    />
  );
};

export default BrowsePageComponentStyleCard;
