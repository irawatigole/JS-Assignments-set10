// A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth. A rover's position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

// Assume that the square directly North from (x, y) is (x, y+1).
// INPUT:
// The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
// The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.
// Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.
// OUTPUT:
// The output for each rover should be its final co-ordinates and heading.


//write Your test cases here
// test('statement',() => { 
//     expect(rover(1, 2, 'N', 'LMLMLMLMM')).toBe('1 3 N');
//   });
//  //write Your test cases here
//   test('statement',() => { 
//     expect(rover(3, 3, 'E', 'MMRMMRMRRM')).toBe('5 1 E');
//   });


function rover(x,y,direction,commands){
  let directions = ['N', 'E', 'S', 'W'];
  let result=[];
         commands = commands.split('')    
        for (let i=0; i<commands.length; i++){
        let xIncrease=0; 
        let yIncrease=0;
         if(commands[i] === 'M'){    
            if(direction === 'N'){
              yIncrease = 1;
            } else if(direction === 'E'){
              xIncrease = 1;
            } else if (direction === 'S'){
              yIncrease = -1;
            } else if (direction === 'W'){
              xIncrease = -1;
            }
             x = x + xIncrease;
             y = y + yIncrease;   
           } 
            else if (commands[i]=== 'L' || commands[i]=== 'R') {
            for(let j = 0; j < directions.length; j++) {
                if (directions[j] === direction) {
                 directionNumber = j;        
            if (commands[i] === 'L') { 
                directionNumber = (directionNumber + 4 - 1) % 4;     
            } else  { 
                directionNumber = (directionNumber + 1) % 4;
            } 
          }  
        }
        direction = directions[directionNumber]; 
          }       
      }  
      result.push(x,y,direction);
      return result.join(' '); 
}
    console.log(rover(1, 2,'N','LMLMLMLMM'));
    console.log(rover(3, 3, 'E', 'MMRMMRMRRM'));