/* eslint-disable react/jsx-fragments */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';
import styles from '../../assets/js/components/betStyle';

const useStyles = makeStyles(styles);

const BetCard = (props) => {
  const gameDetails = props.game.attributes;
  const bet = props.bet;
  const classes = useStyles();

  return (
    <Fragment>
      <TableRow className={classes.tableBodyRow1}>
        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{gameDetails.match_date}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{gameDetails.match_name}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{bet.bet_type}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{bet.odds}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{bet.wager}</p>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default BetCard;
