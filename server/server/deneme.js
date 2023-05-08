function deneme(){ 
    var x = 3 
    var y = 8 
    while (x<9){
        if(x%4==0){ 
            console.log(y/x)
            x = x+4 
            y =y -5 
        }else{ 
            console.log(x-y)
            console.log(x+y)
            x++; y++;
            
        }
    }
}
deneme()