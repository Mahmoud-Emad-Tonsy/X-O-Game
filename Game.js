 




let square = [] ;
let turn = 'X' ; 
let Title = document.querySelector(".title");





function game (id){


    let element = document.getElementById(id);


    if(turn === 'X' &&  element.innerHTML == '' )

    {

        element.innerHTML= 'X' ;

        turn = 'O' ;

        Title.innerHTML = ' O (Can Play)'


    } 
    
    else if (turn === 'O' && element.innerHTML == '' )

    {

        element.innerHTML= 'O';
        turn = 'X' ;
        Title.innerHTML = ' X (Can play)' ;
    }

    Winner ()
}









function end (n1 , n2 , n3){

    Title.innerHTML = `${square[n1]} Winner` ;
    
    document.getElementById("item"+n1).style.background="black";
    document.getElementById("item"+n2).style.background="black";
    document.getElementById("item"+n3).style.background="black";
    
    setInterval(()=>{

       Title.innerHTML+= '.' ;

    } ,1000);
    setTimeout(()=>{


        location.reload()

     },4000)


}


function Winner (){

    for ( let i = 1 ; i < 10 ; i++)
    {
    
         square[i] = document.getElementById("item"+i).innerHTML
    }


    square[1] == square[2] && square[2] == square[3] && square[1] != '' 
    ? end(1,2,3) 
    :
    square[4] == square[5] && square[5] == square[6] && square[4] != ''
    ?   end(4,5,6)
    :
    square[7] == square[8] && square[8] == square[9] && square[7] != ''
    ?   end(7,8,9)
    :
    square[1] == square[5] && square[5] == square[9] && square[1] != ''
    ?     end(1,5,9)
    :
    square[3] == square[5] && square[5] == square[7] && square[3] != ''
    ? end(3,5,7)
    :
    square[1] == square[4] && square[4] == square[7] && square[1] != ''
    ?  end(1,4,7)
    :
    square[2] == square[5] && square[5] == square[8] && square[2] != ''
    ?  end(2,5,8)
    :
    square[3] == square[6] && square[6] == square[9] && square[3] != ''
    ?    end(3,6,9) : "" ;


}

   



//     if(square[1] == square[2] && square[2] == square[3] && square[1] != ''){


// end(1,2,3)
//     }

//     else if (square[4] == square[5] && square[5] == square[6] && square[4] != ''){
//         end(4,5,6)

//     }
//     else if (square[7] == square[8] && square[8] == square[9] && square[7] != ''){

//         end(7,8,9)
       
//     }
//     else if (square[1] == square[5] && square[5] == square[9] && square[1] != ''){

//         end(1,5,9)
      
//     }
//     else if (square[3] == square[5] && square[5] == square[7] && square[3] != ''){

//         end(3,5,7)
//     }
//     else if (square[1] == square[4] && square[4] == square[7] && square[1] != ''){

//         end(1,4,7)
       
//     }
//     else if (square[2] == square[5] && square[5] == square[8] && square[2] != ''){

//         end(2,5,8)
//     }
//     else if (square[3] == square[6] && square[6] == square[9] && square[3] != ''){

//         end(3,6,9)
//     }

//     else {

        
//     }







// 





