let userName = 'Andrew';
let eightBall = '';
const randomNumber = Math.floor(Math.random() * 8);
const userQuestion = 'Will I become a werewolf tonight?';
 userName === 'Jane' ? console.log('Hello, Jane!') : console.log('Hello!');

 console.log(`${userName} asked ${userQuestion}`);
 switch (randomNumber) {
   case 0:
    eightBall = 'It is certain';
    break;
   case 1:
    eightBall = 'How should I know, I\'m an 8 ball?';
    break;
   case 2:
    eightBall = 'HOW ABOUT NO!';
    break;
   case 3:
    eightBall = 'Yeah go on then';
    break;
   case 4:
   eightBall = 'Sure why not?';
   break;
   case 5:
    eightBall = 'Not likely son';
    break;
   case 6:
    eightBall = 'Looking Good!';
    break;
   case 7:
    eightBall = 'We\'ll see about that!';
    break;
 }
  console.log(`The eight ball answered ${eightBall}`);
  