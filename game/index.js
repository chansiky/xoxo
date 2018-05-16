import {Map} from 'immutable'



export const move = (position, player) => {
    return {
      type: 'move',
      position,
      player
    }
}



// const initialState = {
//   board: newBoard,
//   player: 'X'
// }

function board(gameBoard=Map(), action) {
  
  return gameBoard
}

function turn() {
  // this is to handle the player key
}

export default function reducer(game = {}, action) {
  switch(action.type) {
    case "move":
      if (game.player === 'X') {
        let nextPlayer = 'O'
      } else {
        let nextPlayer = 'X'
      }
      return {
        board: game.board.setIn(action.position, game.player),
        player: nextPlayer
      }
    default: 
      return {
        board: board(game.board)
      }
  }
}


