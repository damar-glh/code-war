const rps = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!';
    } else if (
        (p1 === 'rock' && p2 === 'scissors') ||
        (p1 === 'paper' && p2 === 'rock') ||
        (p1 === 'scissors' && p2 === 'paper')
    ) {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
};

// const rps = (p1, p2) => p1 === p2 ? 'Draw!' : ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper')) ? 'Player 1 won!' : 'Player 2 won!';
