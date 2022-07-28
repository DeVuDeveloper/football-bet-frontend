/* eslint-disable prefer-template */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
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

const useStyles = makeStyles(styles);

const PastGames = (props) => {
  const mapGameInfoToMatchCard = () => {
    return props.pastGames.map((game) => {
      return <Match key={game.id} game={game} {...props} />;
    });
  };
  const classes = useStyles();

  return (
    <Fragment>
      <h2>Finished matches</h2>

      {props.pastGames.length === 0 ? (
        <h5>Waiting for matches to finish...</h5>
      ) : (
        <Fragment>
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
                  Winner
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{mapGameInfoToMatchCard()}</TableBody>
          </Table>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PastGames;
