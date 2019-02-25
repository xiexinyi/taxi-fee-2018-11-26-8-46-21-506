module.exports = function main(miles, waiting) {
    var cost;

    if(miles <= 2){
    	cost = 6; 
    }else if(miles <= 8){
    	cost = (miles - 2) * 0.8 + 6;	
    }else{
    	cost = (miles - 8) * 1.2 + (8 - 2) * 0.8 + 6;
    }

    if(waiting > 0){
    	cost += waiting * 0.25;
    }

    return Math.round(cost);
};