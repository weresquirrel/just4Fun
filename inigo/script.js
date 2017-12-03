let txt = "Hello, my name is Inigo Montoya. You killed my father. Prepare to die!";
let HP = 10;

const sixFingeredMan = {
	status: HP,
	picture: "img01",
	name: "six fingered man"

};

const inigo = {
	status: txt,
	picture: "img02",
	name: "Inigo Montoya"
};

for (i = HP; i > 0; i--) {
	console.log(`${sixFingeredMan.name} - HP: ${sixFingeredMan.status}`);
	sixFingeredMan.status = sixFingeredMan.status - 1;
	console.log(`${inigo.name.toUpperCase().slice(0, 5)}: ${inigo.status}`);
}
console.log(`${sixFingeredMan.name} - HP: ${sixFingeredMan.status}`);
console.log(`${inigo.name.toUpperCase().slice(0, 5)}: ...`);

//I still watch Princess Bride, when I'm sick.