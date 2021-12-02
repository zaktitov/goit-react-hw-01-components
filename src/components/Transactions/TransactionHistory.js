import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const Table = ({ tableData }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {tableData.map(data => (
        <tr key={data.id}>
          <td>{data.type}</td>
          <td>{data.amount}</td>
          <td>{data.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
export default Table;
