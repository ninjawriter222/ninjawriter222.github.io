var high =91;
var low =65;
var wSpeed =5;
var tempaverage= ((high + low) /2);

if(low === parseInt(low, 10) || high === parseInt(high,10)){
var windChill= 35.74 + 0.6215 * tempaverage - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * tempaverage * Math.pow(wSpeed, 0.16);
windChill= Math.round(windChill)  +  "&deg;F";
}
else
    windChill =="N/A"

document.getElementById ("windChill").innerHTML= windChill;