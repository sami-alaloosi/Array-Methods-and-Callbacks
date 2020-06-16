import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const fiftFilterd = fifaData.filter(data => {
    return data.Year == 2014 && data.Stage == "Final";
});
console.log(fiftFilterd);//this is a test.
//(a) 
const a = fiftFilterd.map(data => data["Home Team Name"]);
console.log(a);//this is a test.
//(b)
const b = fiftFilterd.map(data => data["Away Team Name"]);
console.log(b);//this is a test.
//(c)
const c = fiftFilterd.map(data => data["Home Team Goals"]);
console.log(c);//this is a test.
//(d)
const d = fiftFilterd.map(data => data["Away Team Goals"]);
console.log(d);//this is a test.
//(e)
const e = fiftFilterd.map(data => data["Home Team Name"]);
console.log(e);//this is a test.






/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {
    return array.filter(data => data.Stage === "Final")
};

console.log(getFinals(fifaData))//this is a test.

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const callbackData = callback(fifaData);
    const years = callbackData.map(data => data.Year);
    return years;
};

console.log(getYears(getFinals))


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {

    const callbackData = callback(fifaData);
    const copy = callbackData.map(
        data => {
            if (data["Home Team Goals"] > data["Away Team Goals"]) {
                return { winner: data["Home Team Name"] };
            } else if (data["Home Team Goals"] == data["Away Team Goals"]) {
                const draw = data['Win conditions'].split(' ');
                return { winner: draw[0] };
            } else return { winner: data["Away Team Name"] }
        }

    )
    return copy;

};
console.log(getWinners(getFinals)) //this is a copy


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callbackWinners, callbackYears) {
    let newArray = [];
    for (let i = 0; i < callbackYears.length; i++) {
        newArray.push(`In ${callbackYears[i]}, ${callbackWinners[i].winner} won the world cup!`)
    }
    return newArray;

};
console.log(getWinnersByYear(getWinners(getFinals), getYears(getFinals))
)

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(array) {
    let home_team_goals = array.map(data => data['Home Team Goals']);
    let homeReduced = home_team_goals.reduce((total, data) => {
        return total += data;
    }, 0);
    let homeAverage = (homeReduced / array.length).toFixed(2);

    let away_team_goals = array.map(data => data['Away Team Goals']);
    let awayReduced = away_team_goals.reduce((total, data) => {
        return total += data;
    }, 0);
    let awayAverage = (awayReduced / array.length).toFixed(2);

    return `The Home average is: ${homeAverage}, The Away average is: ${awayAverage}`

};

console.log(getAverageGoals(fifaData))//this is a test.

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(array, initials) {
    //get to the finals
  let finals = array.filter(data => data.Stage === "Final")
    // get to winners initials
    ;
    const winnersInitials = finals.map(
        data => {
            if (data["Home Team Goals"] > data["Away Team Goals"]) {
                return { winner: data["Home Team Initials"] };
            } else if (data["Home Team Goals"] == data["Away Team Goals"]) {
                const draw = data['Win conditions'].split(' ');
                 if(draw[0] == "Italy" ) {
                    return { winner: "ITA" };
                 } else return { winner: "BRA" };
            } else return { winner: data["Away Team Initials"] }
        }

    )
     
      let theWinners = winnersInitials.filter(data => data.winner === initials.toUpperCase() );

      return theWinners.length;


};

console.log(getCountryWins(fifaData, "eSp")
)



/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */



/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
