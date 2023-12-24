import { useRouter } from 'next/router';
import BrowsePageComponentCheckboxInput from 'components/browse/shared/checkbox-input';

const BrowsePageComponentPatternCard = ({
  pattern,
  handleSearchPattern = () => {},
}) => {
  const router = useRouter();
  const existedPattern = router?.query?.pattern || '';
  return (
    <BrowsePageComponentCheckboxInput
      name={pattern}
      onClick={() =>
        handleSearchPattern(
          existedPattern ? `${existedPattern}_${pattern}` : pattern
        )
      }
    />
  );
};

export default BrowsePageComponentPatternCard;
