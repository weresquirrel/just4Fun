function who(string) {

	let a = [];
	for(i = 0; i< string.length + 4 ; i++){
		a.push('*');
		}
	a = a.join('');
	return `${a}\n* ${string} *\n${a}`;
}

console.log(who("Roger Rabbit"));
// And actually *who* framed Roger Rabbit. :)