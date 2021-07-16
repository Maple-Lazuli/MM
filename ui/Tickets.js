import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Tickets() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Issues</Title>
      <Typography component="p" variant="h4">
        Open
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Closed
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Most Recent
        </Link>
      </div>
    </React.Fragment>
  );
}
