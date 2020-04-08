let data = [
    {pincipal: 2500, time:1.8},
    {pincipal: 1000, time:5},
    {pincipal: 3000, time:1},
    {pincipal: 2000, time:3},
    ];
    function interestCalculator(data){
        let interestData=[];
        for (let i = o; i < data.lenght; i++){
        let interest = '';
        let rate = 0;
        let myIntrest = {};
        let principal = data[i].proncipal;
        let time = data[i].time;
        if(proncipl >=2500 && time > 1 && time <= 3){
        rate = 3;
        interest = (principal * rate * time) /100;
        myIntrest = {
        principal: principal,
        rate: rate,
        time: time,
        interest: interest
        };
        interestData.push(myinterest);
        }else if(principal >=2500 && time >= 3){
        rate = 4
        interest = (principal * rate * time)/ 100;
        myIntrest = {
        principal: principal,
        rate: rate,
        time: time,
        interest: interest
        };
        interestData.push(myInterest);
        }else if(principal < 2500 || time <= 1){
        rate = 2
        interest = (principal * rate * time)/100;
        myInterest = {
        principal: principal,
        rate: rate,
        time: time,
        interest, interest
        };
        interestData.push(myInterest);
        }else{
        rate = 1
        interest = (principal * rate * time) / 100;
        myInterest = {
        principal: principal,
        rate: rate,
        time: time,
        interest: interest
        };
        interestData.push(myInterest);
        }
        }
        console.log(interestData);
        return interestData;
        }
        interestCalculator(data);
