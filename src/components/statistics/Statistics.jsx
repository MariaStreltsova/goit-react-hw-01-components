import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

import {
  StatisticsContainer,
  Info,
  Title,
  StatisticsList,
  Item,
} from './StyledStatistics';

export default function Statistics({ title, stats }) {
  const isTitle = { title };
  return (
    <StatisticsContainer>
      <Info>
        <Title>{isTitle && title}</Title>
        <StatisticsList>
          {stats.map(stat => (
            <Item key={stat.id}>
              <StatisticsItem label={stat.label} percentage={stat.percentage} />
            </Item>
          ))}
        </StatisticsList>
      </Info>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
