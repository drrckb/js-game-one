const start = prompt("Are you ready to test your might?");

if (start === 'no') {
  alert("Return when you are stronger...");
} else if (start === 'yes') {
  const name = prompt("What is your name, Warrior?");


  let player = 40;
  let grant = 10;
  let wins = 0;


  while (player > 0 && wins < 3) {
    player -= Math.floor((Math.random() * 2) + 1);
    grant -= Math.floor((Math.random() * 2) + 1);
    console.log('Grant The Mighty Chicken has ' + grant + ' health remaining.');
    console.log(name + ' The Strong has ' + player + ' health remaining.');

    if (grant <= 0) {
      grant = 10;
      wins++;
      console.log('Warrior, YOU HAVE WON THIS ROUND...');
    } else if (wins === 3) {
      console.log("You are the champion.");
    }
  }
} else {
  alert('Return when you are stronger...')
  }
