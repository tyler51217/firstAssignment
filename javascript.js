function myFunc(value){
    var x = document.getElementById("simg");
    
    if(value == 1){
        x.src = 'images/white.jpg';
    }
    else if(value == 2){
        x.src = 'images/black.jpg';
    }
    else if(value == 3){
        x.src = 'images/blue.jpg';
    }
    else if(value == 4){
        x.src = 'images/orange.jpg';
    }
    else if(value == 5){
        x.src = 'images/red.jpg';
    }
    else{
        x.src = 'images/green.jpg';
    }
    
}

function addCart(){
    alert("Successfully Added to Cart!");
}
