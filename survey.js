const readline = require('readline')
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

rl.question('What\'s your name? (Nicknames are also acceptable) :)\n=> ', (answer) => {

  console.log(`Welcome to LHL, ${answer}`);

  rl.question('What\'s an activity you like doing?\n=> ', (answer) => {

    console.log(`That's awesome!`);

    rl.question('What do you listen to while doing that?\n=> ', (answer) => {

      console.log(`Sounds perfect!`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n=> ', (answer) => {

        console.log(`Hmm! You sure love to eat!`);

        rl.question('What\'s your favourite thing to eat for that meal?\n=> ', (answer) => {

          console.log(`No way! That's mine too!`);

          rl.question('Which sport is your absolute favourite?\n=> ', (answer) => {

            console.log(`Perfectly Suits you!`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n=> ', (answer) => {

              console.log(`Coooool! You are out of the world!`);
              rl.close();

            });
          });
        });
      });
    });
  });
});






// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!