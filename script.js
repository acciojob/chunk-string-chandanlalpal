// Question: Chunk String 
function stringChop(str, size) {
	if (!str) return [];
	    size = Math.max(1, Number(size));
    let chunks = [];
    for(let i=0; i<str.length; i = i + size) {
        let subStr = str.slice(i, i+size);
        // console.log(subStr);
        chunks.push(subStr);
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
