/* eslint-disable prefer-template */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core';
import styles from '../../assets/js/components/bookMakerStyle';
import Match from './Match';
import '../../styles/Games.css';

const useStyles = makeStyles(styles);

const FutureGames = (props) => {
  const mapGameInfoToMatchCard = () => {
    return props.futureGames.map((game) => {
      return <Match key={game.id} game={game} outcome={false} {...props} />;
    });
  };
  const classes = useStyles();

  return (
    <Fragment>
      <h2>Upcoming matches</h2>
      <Table
        className={classes.table + ' table-borderless'}
        aria-label="pills-soccer-tab"
      >
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              Date
            </TableCell>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              Home
            </TableCell>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              Away
            </TableCell>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              1
            </TableCell>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              X
            </TableCell>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              2
            </TableCell>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              1X
            </TableCell>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              2X
            </TableCell>
            <TableCell className={classes.tableHeadItem + ' text-center'}>
              Place bet
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{mapGameInfoToMatchCard()}</TableBody>
      </Table>
    </Fragment>
  );
};

export default FutureGames;
