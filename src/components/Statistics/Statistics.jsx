import data from './data.json';
import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsItem,
  StatisticsList,
  StatisticsPercentage,
  StatisticsLabel,
} from './Statistics.styled';
const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && (
        <h2
          style={{
            textAlign: 'center',
            fontSize: '40px',
          }}
        >
          Upload stats
        </h2>
      )}
      <StatisticsList>
        <StatisticsItem style={{ backgroundColor: 'green' }}>
          <StatisticsLabel>{data[0].label}</StatisticsLabel>
          <StatisticsPercentage>{data[0].percentage}%</StatisticsPercentage>
        </StatisticsItem>
        <StatisticsItem style={{ backgroundColor: 'yellow' }}>
          <StatisticsLabel>{data[1].label}</StatisticsLabel>
          <StatisticsPercentage>{data[1].percentage}%</StatisticsPercentage>
        </StatisticsItem>
        <StatisticsItem style={{ backgroundColor: 'orange' }}>
          <StatisticsLabel>{data[2].label}</StatisticsLabel>
          <StatisticsPercentage>{data[2].percentage}%</StatisticsPercentage>
        </StatisticsItem>
        <StatisticsItem style={{ backgroundColor: 'pink' }}>
          <StatisticsLabel>{data[3].label}</StatisticsLabel>
          <StatisticsPercentage>{data[3].percentage}%</StatisticsPercentage>
        </StatisticsItem>
        <StatisticsItem style={{ backgroundColor: 'tomato' }}>
          <StatisticsLabel>{data[4].label}</StatisticsLabel>
          <StatisticsPercentage>{data[4].percentage}%</StatisticsPercentage>
        </StatisticsItem>
      </StatisticsList>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
