import { useRouter } from 'next/router';

import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentMaterialCard = ({
  material,
  handleSearchMaterial = () => {},
}) => {
  const router = useRouter();
  const existedMaterial = router?.query?.material || '';
  return (
    <BrowsePageComponentCheckboxInput
      name={material}
      onClick={() =>
        handleSearchMaterial(
          existedMaterial ? `${existedMaterial}_${material}` : material
        )
      }
    />
  );
};

export default BrowsePageComponentMaterialCard;
