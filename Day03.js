//Switch case using range condition

let per = 60;

if(per<0){
    console.log("Invalid percentage");
}
else{
    switch (per) {
        case 0-35:
            console.log("F");
            break;
        case 36-45:
            console.log(`Your pupil has passed with ${per} and a 'E' grade`);
            break;
        case 46-60:
            console.log(`Your pupil has passed with ${per} and a 'D' grade`);
            break;
        case 61-75:
            console.log(`Your pupil has passed with ${per} and a 'C' grade`);
        default:
            break;
    }
}