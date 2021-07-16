import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, other_names, ssc, esv) {
  return { id, date, name, other_names, ssc, esv };
}

const rows = [
  createData(0, '16 Mar, 2019', 'AdaSat', 'Tupelo', 45451, 312.44),
  createData(1, '16 Mar, 2019', ' MapleSat', 'London', 75128, 866.99),
  createData(2, '16 Mar, 2019', 'LazSat', 'Boston',784512, 100.81),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Intecepts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Other Names</TableCell>
            <TableCell>SSC</TableCell>
            <TableCell align="right">ESV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.other_names}</TableCell>
              <TableCell>{row.ssc}</TableCell>
              <TableCell align="right">{row.esv}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See More Intercepts
        </Link>
      </div>
    </React.Fragment>
  );
}
