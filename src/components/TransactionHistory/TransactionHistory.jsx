import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.tableItem}>
            <td className={s.tableTd}>{type}</td>
            <td className={s.tableTd}>{amount}</td>
            <td className={s.tableTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
