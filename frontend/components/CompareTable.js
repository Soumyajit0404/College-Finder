// components/CompareTable.js
export default function CompareTable({ colleges }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Fees</th>
          <th>Rating</th>
        </tr>
      </thead>

      <tbody>
        {colleges.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.fees}</td>
            <td>{c.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}