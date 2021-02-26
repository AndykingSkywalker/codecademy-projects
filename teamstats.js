const team = {
  _players: [
    {
      firstName: 'andrew',
      lastName: 'king',
      age: 24
    }, 
    { 
      firstName: 'billy',
      lastName: 'pigeon',
      age: 35
    },
    {
     firstName: 'barbara',
     lastName: 'lighthouse',
     age: 54
    }
  ],
  _games: [
    {
      opponent: 'globetrotters',
      teamPoints: 7,
      opponentPoints: 56
      },
      {
        opponent: 'wildcats',
        teamPoints: 42,
        opponentPoints: 34
      },
      {
        opponent: 'lakers',
        teamPoints: 36,
        opponentPoints: 38
       }
  ],
    get players() {
      return this._players;
    },      
    get games() {
      return this._games;
    },  

    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(oppName, points, oppPoints){
      const game = {
        opponent: oppName,
        points: points,
        opponentPoints: oppPoints
      }
      this.games.push(game);
    }
}


team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players)

team.addGame("Wolves", 45, 28);
team.addGame("Tigers", 12, 44);
team.addGame("Panthers", 36, 76);

console.log(team.games);