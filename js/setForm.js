
var myFirebaseRef = new Firebase("https://scorching-fire-509.firebaseio.com/");

var gamesData;
var newdiv;
var radio;
var label;

myFirebaseRef.once("value", function(data) {
	//gamesData = data.val();
	
	gamesArr = data.val().Season.Week.W12.Games;
	console.log(data.val());
	
	for (var i=0; i < gamesArr.length; i++) {
		if (i % 2 == 0) {$('#con').append('<div id="r2" class="row"></div>')}
		$('#r'+(Math.floor(i/3) + 1)).append('<div class="col-sm-4 well blueBack">' +
			'<small>' + gamesArr[i].DateTime + '</small><br>' +
            '<input id="radio-1'+i+ '" class="radio-custom" name="radio-group'+i+'" type="radio">' +
            '<label for="radio-1'+i+'" class="radio-custom-label">'+gamesArr[i].HomeTeam+'</label><br>' +
            '<input id="radio-2'+i+ '" class="radio-custom" name="radio-group'+i+'" type="radio">' +
            '<label for="radio-2'+i+'" class="radio-custom-label">'+gamesArr[i].AwayTeam+'</label><br>' +
        '</div>')
	}
	
});


/*
<div>
	<input id="radio-1" class="radio-custom" name="radio-group" type="radio" checked>
	<label for="radio-1" class="radio-custom-label">First Choice</label>
</div>*/