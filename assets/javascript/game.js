$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);  
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
 
$('#numberWins').text("Wins: " + wins);
$('#numberLosses').text("Losses: " + losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function winAlert(){
alert("Yay ! You are the winner !");
  wins++; 
  $('#numberWins').text("Wins: " + wins);
  reset();
}
//addes the losses to the userTotal
function loseAlert(){
alert ("Nahh .. Try again");
  losses++;
  $('#numberLosses').text("Losses: " + losses);
  reset()
}
//sets up click for jewels
  $('#gemone').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          winAlert();
        }
        else if ( userTotal > Random){
          loseAlert();
        }   
  })  
  $('#gemtwo').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          winAlert();
        }
        else if ( userTotal > Random){
          loseAlert();
        } 
  })  
  $('#gemthree').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          winAlert();
        }
        else if ( userTotal > Random){
          loseAlert();
        } 
  })  
  $('#gemfour').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          winAlert();
        }
        else if ( userTotal > Random){
          loseAlert();
        }
  });   
}); 