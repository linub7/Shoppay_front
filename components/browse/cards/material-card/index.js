import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentMaterialCard = ({
  material,
  handleSearchMaterial = () => {},
  replaceQuery = () => {},
}) => {
  const result = replaceQuery('material', material);
  return (
    <BrowsePageComponentCheckboxInput
      name={material}
      onClick={() => handleSearchMaterial(result?.result)}
      checked={result?.check}
    />
  );
};

export default BrowsePageComponentMaterialCard;
