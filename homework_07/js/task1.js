var n = Number(prompt("Please, enter natural number, which is less than 21:", 20));
var i, j, k, param, colSpace, colStar;
var textmessage = '';


if (n > 0 && n <= 20) {

	for (i = 1; i <= n; i++) {
		for (colSpace = 1; colSpace <= n - i; colSpace++) {
			textmessage += " " + " " + " ";
		}
		for (colStar = 1; colStar <= i; colStar++) {
			textmessage += "[~]";
			if (colStar % i != 0) {
				textmessage += "[~]"
			}
		}
		textmessage += "\n";
	}
    console.log(textmessage);
    
} else console.error("Incorect Date")