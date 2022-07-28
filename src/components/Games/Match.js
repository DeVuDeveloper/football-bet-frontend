/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable operator-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BetButton from './BetButton';
import styles from '../../assets/js/components/bookMakerStyle';

const useStyles = makeStyles(styles);

const Match = (props) => {
  const gameDetails = props.game.attributes;
  const homeTeamDetails = props.game.meta.homeTeam;
  const awayTeamDetails = props.game.meta.awayTeam;

  const classes = useStyles();

  if (props.outcome === false) {
    return (
      <>
        <TableRow className={classes.tableBodyRow}>
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
            <p className={classes.date}>{homeTeamDetails.name}</p>
          </TableCell>

          <TableCell
            className={classes.tableBodyCell}
            padding="none"
            align="center"
          >
            <p className={classes.date}>{awayTeamDetails.name}</p>
          </TableCell>

          <TableCell
            className={classes.tableBodyCell}
            padding="none"
            align="center"
          >
            <p className={classes.date}>{gameDetails.one}</p>
          </TableCell>

          <TableCell
            className={classes.tableBodyCell}
            padding="none"
            align="center"
          >
            <p className={classes.date}>{gameDetails.draw}</p>
          </TableCell>

          <TableCell
            className={classes.tableBodyCell}
            padding="none"
            align="center"
          >
            <p className={classes.date}>{gameDetails.two}</p>
          </TableCell>

          <TableCell
            className={classes.tableBodyCell}
            padding="none"
            align="center"
          >
            <p className={classes.date}>{gameDetails.one_draw}</p>
          </TableCell>

          <TableCell
            className={classes.tableBodyCell}
            padding="none"
            align="center"
          >
            <p className={classes.date}>{gameDetails.two_draw}</p>
          </TableCell>

          {gameDetails.one !== 'TBD' &&
          gameDetails.draw !== 'TBD' &&
          gameDetails.one_draw !== 'TBD' ? (
            <TableCell
              className={classes.tableBodyCell}
              padding="none"
              align="center"
            >
              <BetButton game={props.game} {...props} />
              {' '}
            </TableCell>
            ) : (
              <TableCell
                className={classes.tableBodyCell}
                padding="none"
                align="center"
              >
                Odds not yet listed
              </TableCell>
            )}
        </TableRow>
      </>
    );
  } else {
    return (
      <TableRow className={classes.tableBodyRow}>
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
          <p className={classes.date}>{homeTeamDetails.name}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{awayTeamDetails.name}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{gameDetails.one}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{gameDetails.draw}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{gameDetails.two}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{gameDetails.one_draw}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{gameDetails.two_draw}</p>
        </TableCell>

        <TableCell
          className={classes.tableBodyCell}
          padding="none"
          align="center"
        >
          <p className={classes.date}>{gameDetails.winner}</p>
        </TableCell>
      </TableRow>
    );
  }
};

export default Match;
