document.getElementById("submit").onclick = function () {
    var score=0;
     //first question
     var userAnswer=document.getElementById("ans1").value
     if(userAnswer.match(/steam/i))
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
     if(userAnswer.match(/fivestar|five[ -_]star|5star|5[ -_]star/i))
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
      if(userAnswer.match(/becool|bee[ -_]cool|becool|be[ _-]cool/i))
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
      if(userAnswer.match(/highfive|high[ -_]five/i))
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
      if(userAnswer.match(/sunflower|sun[ _-]flower/i))
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
      if(userAnswer.match(/temperature/i))
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
            if(userAnswer.match(/postoffice|post[ _-]office/i))
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
      if(userAnswer.match(/keyboard|key[ _-]board/i))
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
     if(userAnswer.match(/turkey/i))
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
      if(userAnswer.match(/secret/i))
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
      if(userAnswer.match(/dies/i))
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
    if(userAnswer.match(/sister/i))
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
    if(userAnswer.match(/moral/i))
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
    if(userAnswer.match(/teasers/i))
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
//end for questions
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
      change.placeholder="It helps us to find super-conductivity and has 11 words";
      change.style.width="65%";
}
//Q.7 hint
document.getElementById("hint2").onclick=function(){
      var change=document.getElementById('ans7');
      change.style.fontSize="21px";
      change.placeholder="Has two words but contains thosand emotions";
      change.style.width="65%";
}
//Q.8 hint
document.getElementById("hint3").onclick=function(){
      var change=document.getElementById('ans8');
      change.style.fontSize="21px";
      change.placeholder="Essential part of input";
      change.style.width="65%";
}
//Q.9 hint
document.getElementById("hint4").onclick=function(){
      var change=document.getElementById('ans9');
      change.style.fontSize="21px";
      change.placeholder="It is the country and its a bird too";
      change.style.width="65%";
}
//Q.10 hint
document.getElementById("hint5").onclick=function(){
      var change=document.getElementById('ans10');
      change.style.fontSize="21px";
      change.placeholder="It is what you keep with your friend";
      change.style.width="65%";
}
//Q.11 hint 
document.getElementById("hint6").onclick=function(){
      var change=document.getElementById('ans11');
      change.style.fontSize="21px";
      change.placeholder="They go to heaven when they ______ .";
      change.style.width="65%"
}
//Q.12 hint
document.getElementById("hint7").onclick=function(){
      var change=document.getElementById('ans12');
      change.style.fontSize="21px";
      change.placeholder="She is not my ______ but I treat her like my own.";
      change.style.width="65%";
}
//Q.13 hint
document.getElementById("hint8").onclick=function(){
      var change=document.getElementById('ans13');
      change.style.fontSize="21px";
      change.placeholder="Every story has some _____ in it.";
      change.style.width="65%";
}
//Q.14 hint
document.getElementById("hint9").onclick=function(){
      var change=document.getElementById('ans14');
      change.style.fontSize="21px";
      change.placeholder="We ran a _____ one moth ago before starting company";
      change.style.width="65%";
}
//Q.15 hint
document.getElementById("hint10").onclick=function(){
      var change=document.getElementById('ans15');
      change.style.fontSize="21px";
      change.placeholder="The company has made great ____ due to their service";
      change.style.width="65%";
}

//Answers script

//Q.6 answer
document.getElementById("sol1").onclick=function(){
      var change=document.getElementById('ans6');
      change.style.fontSize="21px";
      change.placeholder="The answer is TEMPERATURE";
	  change.disabled="true";
      change.fontWeight="bold"	  
	  }
//Q.7 answer
document.getElementById("sol2").onclick=function(){
      var change=document.getElementById('ans7');
      change.style.fontSize="21px";
      change.placeholder="The answer is POST OFFICE";
	  change.disabled="true"; 
	  }
//Q.8 answer
document.getElementById("sol3").onclick=function(){
      var change=document.getElementById('ans8');
      change.style.fontSize="21px";
      change.placeholder="The answer is KEYBOARD";
	  change.disabled="true"; 
	  }
//Q.9 answer 
document.getElementById("sol4").onclick=function(){
      var change=document.getElementById('ans9');
      change.style.fontSize="21px";
      change.placeholder="The answer is TURKEY";
	  change.disabled="true"; 
	  }
//Q.10 answer
document.getElementById("sol5").onclick=function(){
      var change=document.getElementById('ans10');
      change.style.fontSize="21px";
      change.placeholder="The answer is SECRET";
	  change.disabled="true"; 
	  }
//Q.11 answer
document.getElementById("sol6").onclick=function(){
      var change=document.getElementById('ans11');
      change.style.fontSize="21px";
      change.placeholder="The answer is DIES";
	  change.disabled="true"; 
}
//Q.12 answer 
document.getElementById("sol7").onclick=function(){
      var change=document.getElementById('ans12');
      change.style.fontSize="21px";
      change.placeholder="The answer is SISTER";
	  change.disabled="true"; 
}
//Q.13 answer 
document.getElementById("sol8").onclick=function(){
      var change=document.getElementById('ans13');
      change.style.fontSize="21px";
      change.placeholder="The answer is MORAL";
	  change.disabled="true"; 
}
//Q.14 answer
document.getElementById("sol9").onclick=function(){
      var change=document.getElementById('ans14');
      change.style.fontSize="21px";
      change.placeholder="The answer is TEASERS";
	  change.disabled="true"; 
}
//Q.15 answer
document.getElementById("sol10").onclick=function(){
      var change=document.getElementById('ans15');
      change.style.fontSize="21px";
      change.placeholder="The answer is STRIDES";
	  change.disabled="true"; 
}
	 