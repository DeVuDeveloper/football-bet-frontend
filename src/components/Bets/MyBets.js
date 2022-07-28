/* eslint-disable no-else-return */
/* eslint-disable prefer-template */
/* eslint-disable react/jsx-fragments */
/* eslint-disable radix */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core';
import styles from '../../assets/js/components/betStyle';
import BetCard from './BetCard';
import '../../styles/Games.css';

const useStyles = makeStyles(styles);

const MyBets = (props) => {
  const findGameObject = (id) => {
    return props.games.find((game) => {
      return parseInt(game.id) === id;
    });
  };
  const mapBetInfoToBetCard = () => {
    return props.limitBets.map((bet) => {
      const game = findGameObject(bet.game_id);
      return <BetCard key={bet.id} bet={bet} game={game} />;
    });
  };
  const classes = useStyles();
  if (props.limitBets) {
    return (
      <div className="gamesContainer">
        <div className="gamesList">
          <h2>My Tickets</h2>
          {props.games.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            <Fragment>
              <Table
                className={classes.table + ' table-borderless'}
                aria-label="pills-soccer-tab"
              >
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell
                      className={classes.tableHeadItem + ' text-center'}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      className={classes.tableHeadItem + ' text-center'}
                    >
                      Home vs Away
                    </TableCell>
                    <TableCell
                      className={classes.tableHeadItem + ' text-center'}
                    >
                      Pick
                    </TableCell>
                    <TableCell
                      className={classes.tableHeadItem + ' text-center'}
                    >
                      Odd
                    </TableCell>
                    <TableCell
                      className={classes.tableHeadItem + ' text-center'}
                    >
                      $
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{mapBetInfoToBetCard()}</TableBody>
              </Table>
            </Fragment>
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

function mapStateToProps(state) {
  return {
    games: state.games,
  };
}

export default connect(mapStateToProps)(MyBets);
