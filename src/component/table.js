import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function DTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fungsi utilitas untuk mendapatkan data dari API lokal
    const fetchData = async () => {
      try {
        // Ganti dengan URL atau fungsi untuk mengambil data lokal
        const response = await fetch('http://localhost:8080/api/data'); // Contoh URL API lokal
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Panggil fungsi utilitas untuk memuat data saat komponen dimuat
    fetchData();
  }, []); // Efek hanya dijalankan saat komponen di-mount
  

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Time</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Luminous</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, index) => (
          <tr key={index}>
            <td>{rowData.CreatedAt}</td>
            <td>{rowData.Temperature}</td>
            <td>{rowData.Humidity}</td>
            <td>{rowData.Light}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DTable;