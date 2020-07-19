document.getElementById("submit").onclick = function () {
    var score=0;
     //first question
     var userAnswer=document.getElementById("ans1").value
     if(userAnswer.match(/sunburn|sun[ -_]burn/i))
     {
           score+=1;
           document.getElementById("ans1").style.backgroundColor="rgb(46, 124, 59)"
           document.getElementById("ans1").style.color="white"
 
     }else{
       
       document.getElementById("ans1").style.backgroundColor="rgb(124, 46, 46)"
       document.getElementById("ans1").style.color="white"
       
     }
     //second question
     var userAnswer=document.getElementById("ans2").value
     if(userAnswer.match(/babyboy|baby[ -_]boy/i))
     {
           score+=1;
           document.getElementById("ans2").style.backgroundColor="rgb(46, 124, 59)"
           document.getElementById("ans2").style.color="white"
 
     }else{
       
       document.getElementById("ans2").style.backgroundColor="rgb(124, 46, 46)"
       document.getElementById("ans2").style.color="white"
       
     }

      //third question
      var userAnswer=document.getElementById("ans3").value
      if(userAnswer.match(/hotdog|hot[ -_]dog/i))
      {
            score+=1;
            document.getElementById("ans3").style.backgroundColor="rgb(46, 124, 59)"
            document.getElementById("ans3").style.color="white"
  
      }else{
        
        document.getElementById("ans3").style.backgroundColor="rgb(124, 46, 46)"
        document.getElementById("ans3").style.color="white"
        
      }
      //Fourth question
      var userAnswer=document.getElementById("ans4").value
      if(userAnswer.match(/starfish|star[ -_]fish/i))
      {
            score+=1;
            document.getElementById("ans4").style.backgroundColor="rgb(46, 124, 59)"
            document.getElementById("ans4").style.color="white"
  
      }else{
        
        document.getElementById("ans4").style.backgroundColor="rgb(124, 46, 46)"
        document.getElementById("ans4").style.color="white"
        
      }
      //Fifth question
      var userAnswer=document.getElementById("ans5").value
      if(userAnswer.match(/firetruck|firebus|fire[ _-]truck|fire[ _-]bus/i))
      {
            score+=1;
            document.getElementById("ans5").style.backgroundColor="rgb(46, 124, 59)"
            document.getElementById("ans5").style.color="white"
  
      }else{
        
        document.getElementById("ans5").style.backgroundColor="rgb(124, 46, 46)"
        document.getElementById("ans5").style.color="white"
        
      }
      //sixth question
      var userAnswer=document.getElementById("ans6").value
      if(userAnswer.match(/egg/i))
      {
            score+=1;
            document.getElementById("ans6").style.backgroundColor="rgb(46, 124, 59)"
            document.getElementById("ans6").style.color="white"
            
      }
      else{
        
            document.getElementById("ans6").style.backgroundColor="rgb(124, 46, 46)"
            document.getElementById("ans6").style.color="white"
            
          }
      //seventh question
           var userAnswer=document.getElementById("ans7").value
            if(userAnswer.match(/spounge|sponge/i))
           {
            score+=1;
            document.getElementById("ans7").style.backgroundColor="rgb(46, 124, 59)"
            document.getElementById("ans7").style.color="white"
            
            }
          else{
            document.getElementById("ans7").style.backgroundColor="rgb(124, 46, 46)"
            document.getElementById("ans7").style.color="white"
            }
      //eigth question
      var userAnswer=document.getElementById("ans8").value
      if(userAnswer.match(/shadow/i))
     {
      score+=1;
      document.getElementById("ans8").style.backgroundColor="rgb(46, 124, 59)"
      document.getElementById("ans8").style.color="white"
      
      }
    else{
      document.getElementById("ans8").style.backgroundColor="rgb(124, 46, 46)"
      document.getElementById("ans8").style.color="white"
      }
     //ninth question
     var userAnswer=document.getElementById("ans9").value
     if(userAnswer.match(/piano/i))
    {
     score+=1;
     document.getElementById("ans9").style.backgroundColor="rgb(46, 124, 59)"
     document.getElementById("ans9").style.color="white"
     
     }
   else{
     document.getElementById("ans9").style.backgroundColor="rgb(124, 46, 46)"
     document.getElementById("ans9").style.color="white"
     }
      //tenth question
      var userAnswer=document.getElementById("ans10").value
      if(userAnswer.match(/right[ -_]hand[-_ ]elbow|righthandelbow|rightelbow|right[-_ ]elbow/i))
     {
      score+=1;
      document.getElementById("ans10").style.backgroundColor="rgb(46, 124, 59)"
      document.getElementById("ans10").style.color="white"
      
      }
    else{
      document.getElementById("ans10").style.backgroundColor="rgb(124, 46, 46)"
      document.getElementById("ans10").style.color="white"
      }
    //eleventh question 
    var userAnswer=document.getElementById("ans11").value
      if(userAnswer.match(/bank/i))
     {
      score+=1;
      document.getElementById("ans11").style.backgroundColor="rgb(46, 124, 59)"
      document.getElementById("ans11").style.color="white"
      
      }
    else{
      document.getElementById("ans11").style.backgroundColor="rgb(124, 46, 46)"
      document.getElementById("ans11").style.color="white"
      }
      //twelth question 
    var userAnswer=document.getElementById("ans12").value
    if(userAnswer.match(/echo/i))
   {
    score+=1;
    document.getElementById("ans12").style.backgroundColor="rgb(46, 124, 59)"
    document.getElementById("ans12").style.color="white"
    
    }
  else{
    document.getElementById("ans12").style.backgroundColor="rgb(124, 46, 46)"
    document.getElementById("ans12").style.color="white"
    }
    
    //thirteenth question 
    var userAnswer=document.getElementById("ans13").value
    if(userAnswer.match(/potato/i))
   {
    score+=1;
    document.getElementById("ans13").style.backgroundColor="rgb(46, 124, 59)"
    document.getElementById("ans13").style.color="white"
    
    }
  else{
    document.getElementById("ans13").style.backgroundColor="rgb(124, 46, 46)"
    document.getElementById("ans13").style.color="white"
    }
   //Fourteenth question
   var userAnswer=document.getElementById("ans14").value
    if(userAnswer.match(/clock/i))
   {
    score+=1;
    document.getElementById("ans14").style.backgroundColor="rgb(46, 124, 59)"
    document.getElementById("ans14").style.color="white"
    
    }
  else{
    document.getElementById("ans14").style.backgroundColor="rgb(124, 46, 46)"
    document.getElementById("ans14").style.color="white"
    }
//Fifteenth question
var userAnswer=document.getElementById("ans15").value
if(userAnswer.match(/book/i))
{
score+=1;
document.getElementById("ans15").style.backgroundColor="rgb(46, 124, 59)"
document.getElementById("ans15").style.color="white"

}
else{
document.getElementById("ans15").style.backgroundColor="rgb(124, 46, 46)"
document.getElementById("ans15").style.color="white"
}

document.getElementById("afterclk").innerHTML=score;
 finalwords(score);
 function finalwords(score)
 {
   if(score==15)
   {
       document.getElementById("score").style.backgroundColor="rgb(46, 124, 59)"
    document.getElementById("finalwords").innerHTML="Excellent!!! SECURED "+score+" POINTS"
      
   }
   else if(score<5)
   {
     document.getElementById("score").style.backgroundColor="rgb(124, 46, 46)";
     document.getElementById("finalwords").innerHTML="HEY!!!TRY ONCE AGAIN BEFORE GOING TO NEXT LEVEL";
   } 
   else if(score>5||score<14)
   {
    document.getElementById("score").style.backgroundColor="rgb(46, 124, 59)"
    document.getElementById("finalwords").innerHTML="NOT BAD!!! SECURED "+score+" POINTS"
   }
   
 }

}



//scripts for hints
//Q.6 hint
document.getElementById("hint1").onclick=function(){
      var change=document.getElementById('ans6');
      change.style.fontSize="21px";
      change.placeholder="It has two parts white & yellow and is in elliptical shape";
      change.style.width="65%";
}
//Q.7 hint
document.getElementById("hint2").onclick=function(){
      var change=document.getElementById('ans7');
      change.style.fontSize="21px";
      change.placeholder="Used for washing,cleaning and having six words";
      change.style.width="65%";
}
//Q.8 hint
document.getElementById("hint3").onclick=function(){
      var change=document.getElementById('ans8');
      change.style.fontSize="21px";
      change.placeholder="In light it is with you but in dark it is not";
      change.style.width="65%";
}
//Q.9 hint
document.getElementById("hint4").onclick=function(){
      var change=document.getElementById('ans9');
      change.style.fontSize="21px";
      change.placeholder="It is type of musical instrument";
      change.style.width="65%";
}
//Q.10 hint
document.getElementById("hint5").onclick=function(){
      var change=document.getElementById('ans10');
      change.style.fontSize="21px";
      change.placeholder="It is a part of your right hand but not the part of palm";
      change.style.width="65%";
}
//Q.11 hint 
document.getElementById("hint6").onclick=function(){
      var change=document.getElementById('ans11');
      change.style.fontSize="21px";
      change.placeholder="A place where you put your money";
      change.style.width="65%"
}
//Q.12 hint
document.getElementById("hint7").onclick=function(){
      var change=document.getElementById('ans12');
      change.style.fontSize="21px";
      change.placeholder="The cameback of sound and has 4 words";
      change.style.width="65%";
}
//Q.13 hint
document.getElementById("hint8").onclick=function(){
      var change=document.getElementById('ans13');
      change.style.fontSize="21px";
      change.placeholder="It is a type of vegetable";
      change.style.width="65%";
}
//Q.14 hint
document.getElementById("hint9").onclick=function(){
      var change=document.getElementById('ans14');
      change.style.fontSize="21px";
      change.placeholder="It contains that concpt which is as important as money";
      change.style.width="65%";
}
//Q.15 hint
document.getElementById("hint10").onclick=function(){
      var change=document.getElementById('ans15');
      change.style.fontSize="21px";
      change.placeholder="It contains knowledge & Every writer has its own";
      change.style.width="65%";
}


//Answers script

//Q.6 answer
document.getElementById("answer1").onclick=function(){
      var change=document.getElementById('ans6');
      change.style.fontSize="21px";
      change.placeholder="The answer is EGG";
	  change.disabled="true";
      change.fontWeight="bold"	  
	  }
//Q.7 answer
document.getElementById("answer2").onclick=function(){
      var change=document.getElementById('ans7');
      change.style.fontSize="21px";
      change.placeholder="The answer is SPONGE";
	  change.disabled="true"; 
	  }
//Q.8 answer
document.getElementById("answer3").onclick=function(){
      var change=document.getElementById('ans8');
      change.style.fontSize="21px";
      change.placeholder="The answer is SHADOW";
	  change.disabled="true"; 
	  }
//Q.9 answer 
document.getElementById("answer4").onclick=function(){
      var change=document.getElementById('ans9');
      change.style.fontSize="21px";
      change.placeholder="The answer is PIANO";
	  change.disabled="true"; 
	  }
//Q.10 answer
document.getElementById("answer5").onclick=function(){
      var change=document.getElementById('ans10');
      change.style.fontSize="21px";
      change.placeholder="The answer is RIGHT ELBOW";
	  change.disabled="true"; 
	  }
//Q.11 answer
document.getElementById("answer6").onclick=function(){
      var change=document.getElementById('ans11');
      change.style.fontSize="21px";
      change.placeholder="The answer is BANK";
	  change.disabled="true"; 
}
//Q.12 answer 
document.getElementById("answer7").onclick=function(){
      var change=document.getElementById('ans12');
      change.style.fontSize="21px";
      change.placeholder="The answer is ECHO";
	  change.disabled="true"; 
}
//Q.13 answer 
document.getElementById("answer8").onclick=function(){
      var change=document.getElementById('ans13');
      change.style.fontSize="21px";
      change.placeholder="The answer is POTATO";
	  change.disabled="true"; 
}
//Q.14 answer
document.getElementById("answer9").onclick=function(){
      var change=document.getElementById('ans14');
      change.style.fontSize="21px";
      change.placeholder="The answer is CLOCK";
	  change.disabled="true"; 
}
//Q.15 answer
document.getElementById("answer10").onclick=function(){
      var change=document.getElementById('ans15');
      change.style.fontSize="21px";
      change.placeholder="The answer is BOOK";
	  change.disabled="true"; 
}
	 