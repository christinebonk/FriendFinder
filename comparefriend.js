function compare(friend1,friend2) {
	var diffFinal = 0;
	for(i = 0; i<friend2.scores.length;i++) {
		var diff = friend1.scores[i] - friend2.scores[i];
		diff = Math.abs(diff);
		diffFinal += diff;
	};
	return diffFinal;
};

function topFriend(friend1, friendArr) {
	var topFriend;
	var highestScore = 100;
	for (e=0;e<friendArr.length;e++) {
		var current = friendArr[e];
		var result = compare(friend1,current);
		if (result < highestScore) {
			highestScore = result;
			topFriend = current;
		}
	}
	console.log(topFriend.name);
}


module.exports = topFriend; 
