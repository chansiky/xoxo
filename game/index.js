import {Map} from 'immutable'

//action
//store - //state
//reducer

//ACTION
//turn: switching players
function turn(turnVal = 'X', action) {
  //swithc turn val
  console.log('turnval is ', turnVal,'action is ', action, '/n')
  if(action.type === 'move'){
    console.log('inside of turn-move case' ,'/n');
    return (turnVal=== 'X') ? 'O' : 'X';
  }
  return turnVal;

}
//board: updating the board with the new mark location
function board(gameBoard=Map(), action) {
  // map using set-in to correct location



  console.log('action is', action)
  if(action.type === 'move'){
    console.log('inside of board-move case' ,'/n');
    //set the board based on, 
    console.log('action.position is: ', action.position, '} action turn is: ', action.turn);
    return gameBoard.setIn(action.position, action.turn);
  }


  return gameBoard

}

export const move = (player, position) => {

    return {
      type: 'move',
//    board: boardSet,
      turn: player,
      position,
    }
    //return type should be like:
    //{
    //type: 'move'
    //board: boardObject
    //turn:  turnValue
    //}
}



//REDUCER
export default function reducer(game = {}, action) {
  const newBoard = board(game.board, action);
  const newTurn = turn(game.turn, action);

  console.log('game is: ', game, '\n')
  return {
    board: newBoard,
    turn: newTurn
    };

  }

//STORE is in root/index.js


//  if(action.type === 'move'){
//    //updating board
//    //// turn()
//    //switching players
//    ////board
//
//    return object-something;
//  }
//
//  switch(action.type) {
//    case "move":
//      if (game.player === 'X') {
//        let nextPlayer = 'O'
//      } else {
//        let nextPlayer = 'X'
//      }
//      return {
//        board: game.board.setIn(action.position, game.player),
//        player: nextPlayer
//      }
//    default: 
//      return {
//        board: board(game.board)
//      }