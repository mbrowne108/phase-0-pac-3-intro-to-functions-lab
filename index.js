function shout(string) {
    return string.toUpperCase();
} 

function whisper(string) {
    return string.toLowerCase();
} 

function logShout(string) {
    console.log(string.toUpperCase());
} 

function logWhisper(string) {
    console.log(string.toLowerCase());
} 

function sayHiToGrandma(string) {
    console.log(string);
    console.log(string.toUpperCase());
    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }


    console.log(string);
    console.log(string.toLowerCase());
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }

    console.log(string);
    if (string === "I love you, Grandma.") {
        return "I love you, too."
    }

    
} 