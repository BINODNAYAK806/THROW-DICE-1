function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  document.getElementById("roll").addEventListener("click",che)


  function che(){

var a = getRandomInt(7);
var b = getRandomInt(7);
var c = getRandomInt(7);
document.getElementById("member-1").innerHTML= a
document.getElementById("member-2").innerHTML= b
document.getElementById("member-3").innerHTML= c
// console.log(a,b,c)
    if(a > b && a>c){

        document.getElementById("member-1").style.backgroundColor = "green";
        document.getElementById("win").innerHTML =  " winner is member-1"

        if(b>c){

            document.getElementById("member-2").style.backgroundColor = "yellow";
            document.getElementById("member-3").style.backgroundColor = "red";

        }
        else{
            document.getElementById("member-3").style.backgroundColor = "yellow";
            document.getElementById("member-2").style.backgroundColor = "red";
        }

    }

    else if(b>c  && b >a ){

        document.getElementById("member-2").style.backgroundColor = "green";
        document.getElementById("win").innerHTML =  " winner is member-2"

        if(a>c){

            document.getElementById("member-1").style.backgroundColor = "yellow";
            document.getElementById("member-3").style.backgroundColor = "red";

        }
        else{
            document.getElementById("member-3").style.backgroundColor = "yellow";
            document.getElementById("member-1").style.backgroundColor = "red";
        }
 



    }
    else if(c>a  && c >b ){

        document.getElementById("member-3").style.backgroundColor = "green";
        document.getElementById("win").innerHTML =  " winner is member-3"

        if(a>b){

            document.getElementById("member-1").style.backgroundColor = "yellow";
            document.getElementById("member-2").style.backgroundColor = "red";

        }
        else{
            document.getElementById("member-2").style.backgroundColor = "yellow";
            document.getElementById("member-1").style.backgroundColor = "red";
        }
 



    }
    else{

        if(a==b && b==c ){

            document.getElementById("win").innerHTML =  " draw "    

            document.getElementById("member-1").style.backgroundColor = "blue";
            document.getElementById("member-2").style.backgroundColor = "blue";
            document.getElementById("member-3").style.backgroundColor = "blue";

        }




    }
    



  }

//   console.log(a,b,c)