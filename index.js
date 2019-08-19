//PART 2 - added Functions: ['startCombat', 'startGame', 'getDamage']

// const getDamage = () => {
//   return Math.floor((Math.random() * 5) + 1);
// }
//
// const startCombat = (name) => {
//   let player = 40;
//   let grant = 10;
//   let wins = 0;
//
//     while (player >= 0 && wins <= 3) {
//       const choice = prompt("ATTACK or QUIT").toLowerCase();
//         if (choice === 'attack') {
//           player -= getDamage();
//           grant -= getDamage();
//           console.log('Grant The Mighty Chicken has ' + grant + ' health remaining.');
//           console.log(name + ' The Strong has ' + player + ' health remaining.');
//         } else if (choice === 'quit') {
//           alert("Return when you are stronger...");
//           console.log("You have lost...");
//           break;
//         }
//
//       if (grant <= 0) {
//         grant = 10;
//         wins++;
//         if (wins < 3){
//           console.log(name + ', you have won this ROUND...');
//         } if (wins === 3) {
//             console.log(name + ', YOU ARE THE CHAMPION!');
//             break;
//           } if (player <= 0) {
//             console.log("You have lost...");
//             break;
//           }
//       }
//     }
// }
//
// const startGame = () => {
//   const start = prompt("Are you ready to test your might?").toLowerCase();
//
//     if (start === 'no') {
//       alert("Return when you are stronger...");
//     } else if (start === 'yes') {
//         const name = prompt("What is your name?").toLowerCase();
//
//         startCombat(name);
//       }
// }
//
// startGame();




/*Part 3 - create Objects for User/Grant: {health:, name:}
- include a getDamage(method) that Returns damage - console.log(result)
- EITHER CLASSES OR OBJECT LITERALS WILL COMPLETE THE JOB*/


const startCombat = (name) => {

  class Character {
    constructor (name, health) {
      this.name = name;
      this.health = health;
    }

    getDamage() {
      return Math.floor((Math.random() * 5) + 1);
    }
  }

  const user = new Character(name, 40);
  const grant = new Character('Grant', 10);

  console.log('New Player: ' + user.name, user.health);
  console.log('Opponent: ' + grant.name, grant.health)

  let wins = 0;

    while (user.health >= 0 && wins <= 3) {

      const choice = prompt("ATTACK or QUIT -- Use: 'A' or 'Q' keys").toLowerCase();
        if (choice === 'a') {
          user.health -= grant.getDamage();
          grant.health -= user.getDamage();
          console.log('Grant The Mighty Chicken has ' + grant.health + ' health remaining.');
          console.log(user.name + ' The Strong has ' + user.health + ' health remaining.');
        } else if (choice === 'q') {
          alert("Return when you are stronger...");
          console.log("You have lost...");
          break;
        }

        if (grant.health <= 0) {
          grant.health = 10;
          wins++;
          if (wins < 3){
            alert(name + ', you have won this ROUND...');
            console.log('-----------------------------------------')
          } if (wins === 3) {
              alert(name + ', YOU ARE THE CHAMPION!');
              break;
            } if (user.health < 0) {
              console.log("You have lost...");
              break;
            }
      }
    }
}

const startGame = () => {
  const start = prompt("Are you ready to test your might?").toLowerCase();

    if (start === 'no') {
      alert("Return when you are stronger...");
    } else if (start === 'yes') {
        const name = prompt("What is your name?").toLowerCase();

        startCombat(name);
      }
}

startGame();
