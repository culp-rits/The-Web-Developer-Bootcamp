function returnDay(x) {
    if(x<8 && x>0) {
        if(x==1) {
            return "Monday";
        }
        else if(x==2){
            return "Tuesday";
        }
        else if(x==3){
            return "Wednesday";
        }
        else if(x==4){
            return "Thursday";
        }
        else if(x==5){
            return "Friday";
        }
        else if(x==6){
            return "Saturday";
        }
        else {
            return "Sunday";
        }
    } 
    else {
        return null;
    }
}
