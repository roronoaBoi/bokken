//can i make a H or T game off the dome?
const attempts = process.argv[2]

function hOrT(max) {
    return Math.floor(Math.random() * max);
  }

const game = []

for (let i = 0; i < attempts; i++) {
    const play = hOrT(2) //2 is excluded, so only 0 or 1
    if(play === 0){
        game.push('H')
    } else {
        game.push('T')
    }
}

console.log(game)
//yes i can