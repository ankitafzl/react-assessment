import React, { useState } from 'react';
import { Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const DataTable = () => {
  const Datas = [
    {
      name: "Ankita",
      UpVote: 5,
      date: "2022/04/21"
    },
    {
      name: "Anjali",
      UpVote: 3,
      date: "2022/06/15"
    },
    {
      name: "Rajini",
      UpVote: 10,
      date: "2023/07/20"
    },
    {
      name: "Chirag",
      UpVote: 6,
      date: "2023/04/04"
    },
    {
      name: "Ankita",
      UpVote: 3,
      date: "2021/04/27"
    }
  ];

  // state to hold the data
  const [data, setData] = useState(Datas);

  // function to sort data by UpVote in descending order
  const handleSortByUpVote = () => {
    const sortedData = [...data].sort((a, b) => b.UpVote - a.UpVote);
    setData(sortedData);
  };

  // function to sort data by Date in ascending order
  const handleSortByDate = () => {
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(sortedData);
  };

  return (
    <div style={{ margin: '20px auto', width: '60%' }}>
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Button variant="contained" style={{ marginRight: '20px' }} onClick={handleSortByUpVote}>Sort by UpVote</Button>
        <Button variant="contained" onClick={handleSortByDate}>Sort by Date</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>UpVote</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.UpVote}</TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
