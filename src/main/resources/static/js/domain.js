const prodUrl = "https://uatsmartfinds.herokuapp.com/";
const devUrl = "http://localhost:8080/";
const activeURL = devUrl;
//const activeURL =  prodUrl;

function getTimeStamp() {
// format time stamp in yyyy/mm/dd hh:mm:ss format for MySQL input
    const today = new Date();
    return (today.getFullYear() + "/" +
    String(today.getMonth() + 1).padStart(2,'0') + "/" +
    String(today.getDate()).padStart(2,'0') + " " +
    String(today.getHours()).padStart(2,'0') + ":" +
    String(today.getMinutes()).padStart(2,'0') + ":" +
    String(today.getSeconds()).padStart(2,'0')
    );
}

function whenUpdated(updateDate) {
    const mth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const uDate = new Date(updateDate);
    const todayDate = new Date();

    // console.log(uDate);
    let dispString = "";
    if ( (dispString = diff_seconds(todayDate, uDate)) != -1) {
      return(dispString +" sec ago");
    }
    else if ( (dispString = diff_minutes(todayDate, uDate)) != -1) {
      return(dispString + " min ago");
    }
    else if ( (dispString = diff_hours(todayDate, uDate)) != -1) {
      return(dispString + " hour ago");
    }
    else if ( (dispString = diff_days(todayDate, uDate)) != -1) {
      return(dispString + " day(s) ago");
    }
    else {
      return("since " + uDate.getFullYear() + " " + mth[uDate.getMonth()] + " " + uDate.getDate());
    }
}

function diff_days(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  if ( Math.abs(Math.round(diff)) > 30)
    return -1; // show actual time
  return Math.abs(Math.round(diff));

 }

function diff_hours(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  if (Math.abs(Math.round(diff)) > 24)
    return -1; // check for days
  return Math.abs(Math.round(diff));

 }


function diff_minutes(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60);
  if (Math.abs(Math.round(diff)) > 60)
    return -1; // check for hours to display
  return Math.abs(Math.round(diff));

 }

function diff_seconds(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    if (Math.abs(Math.round(diff)) > 60)
        return -1; // check for minutes to display
    else
        return Math.abs(Math.round(diff));
 }

function formatPrice(price) {

      var price = "$" + Number(price).toFixed(2);
       return(price);
}

