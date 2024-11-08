var numTeams = function(rating) {
    let result = 0
    for(let i=0; i < rating.length - 2; i++){
        for(let j = i + 1; j < rating.length - 1; j++){
            for(let k=j+1; k < rating.length; k++){
                if(rating[i] < rating[j] && rating[j] < rating[k]) result++
                if(rating[i] > rating[j] && rating[j] > rating[k]) result++
            }
        }
    }

    return result
};

/*
solution 2
*/

var numTeams = function(rating) {
    let teams = 0;
    let leftInc = 0;
    let rightInc = 0;

    let leftDec = 0;
    let rightDec = 0;
    for (let i = 1; i < rating.length - 1; i++) {
        let current = rating[i];
        leftInc = 0;
        rightInc = 0;

        leftDec = 0;
        rightDec = 0;

        //[4,3,2,1]
        /*
        leftDec = 2
        rigthDec = 2
        */

        for (let j = 0; j < i; j++) {
            if (rating[j] < current) {
                leftInc++;
            } else {
                leftDec++;
            }
        }

        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] > current) {
                rightInc++;
            } else {
                rightDec++;
            }
        }

        teams += leftInc * rightInc + leftDec * rightDec;
    }

    return teams;
};


