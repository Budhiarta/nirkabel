import Table from 'react-bootstrap/Table';

function DTable(){
  const tableStyle = {
    width: '100%', // Menetapkan lebar tabel menjadi 100%
    height: '300px', // Menetapkan tinggi tabel, sesuaikan dengan kebutuhan Anda
};
    return(
        <Table striped bordered hover size="sm" style={tableStyle}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Luminous</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
          </tr>
        </tbody>
      </Table>
    )
}

export default DTable;