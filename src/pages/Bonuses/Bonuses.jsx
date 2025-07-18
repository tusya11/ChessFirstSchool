import { useMediaQuery } from '@mui/material';
import { bonuses } from './consts';
import MainTitleWithContent from '../../new_components/MainTitleWithContent/MainTitleWithContent';
import RecomendedItems from '../RecomendedItems/RecomendedItems';
import './Bonuses.scss';

const Bonuses = () => {
  const isXS = useMediaQuery('(max-width:700px)');

  return (
    <div id="bonuses" className="bonuses__container">
      <MainTitleWithContent title="Бонусы" padding={isXS ? '0 15px 60px' : ''}>
        <RecomendedItems items={bonuses} padding={'0px'} />
      </MainTitleWithContent>
    </div>
  );
};

export default Bonuses;
