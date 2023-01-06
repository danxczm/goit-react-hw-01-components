import PropTypes from 'prop-types';
import { Box } from '../Box';
// import css from 'components/Statistics/Statistics.module.css';
import {
  StatList,
  Title,
  Item,
  Label,
  Percentage,
} from 'components/Statistics/Statistics.styled.jsx';

export const Statistics = ({ title, stats }) => {
  return (
    <Box mb={3} minWidth="300px">
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
