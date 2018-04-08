function convertTime(seconds) {
	var hours = Math.floor(seconds / (60*60));
      	seconds -= hours   * (60*60);
  	var minutes = Math.floor(seconds / (60));
      	seconds -= minutes * (60);
    
    return ((0 < hours) ? (hours + " h "):"") + minutes + "m " + (seconds.toFixed(0)) + "s";
}

exports.print = convertTime;