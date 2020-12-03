//js-extras | 2020-12-03

const Temperature = {
    celciusToKelvin: (temperature) => {
        return temperature + 273.15
    },
    kelvinToCelcius: (temperature) => {
        return temperature - 273.15
    },
    celciusToFahrenheit: (temperature) => {
        return (temperature * 9) / 5 + 32
    },
    fahrenheitToCelcius: (temperature) => {
        return (temperature - 32) / 1.8
    },
    kelvinToFahrenheit: (temperature) => {
        return temperature * 1.8 - 459.67
    },
    fahrenheitToKelvin: (temperature) => {
        return (temperature + 459.67) / 1.8
    },
    DEGREE_CHAR: "\u00b0",
    MAX_CELCIUS: (parseInt("142" + "0".repeat(31))),
    MIN_CELCIUS: -273.15,
    MAX_FAHRENHEIT: (parseInt("2556" + "0".repeat(30))),
    MIN_FAHRENHEIT: -459.67,
    MAX_KELVIN: (parseInt("1" + "0".repeat(32))),
    MIN_KELVIN: 0,
}

function randomCase(str) {
    return str.split("").map((v) => Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()).join("");
}

function grammar(str) {
    let begin = str.substring(0, 1).toUpperCase() + str.substring(1);
    if (begin.endsWith("?") || begin.endsWith(".") || begin.endsWith("!")) {
        return begin;
    } else {
        return begin + ".";
    }
}

function rainbowText(text, colors = ["\u001b[31m", "\u001b[31;1m", "\u001b[33m", "\u001b[32m", "\u001b[36m", "\u001b[34m", "\u001b[35m"], reset = "\u001b[0m") {
    let result = "";
    let index = -1;

    text.split(" ").forEach(line => {
        line.split("").forEach((letter) => {
            if (index + 1 >= colors.length) index -= colors.length;
            index++;
            result += colors[index] + letter;
        });
        result += " ";
    });
    return reset != undefined ? (result += reset) : result;
}

function formatJson(json) {
    return typeof json == "string" ? JSON.stringify(JSON.parse(json), null, "  ") : JSON.stringify(json, null, "  ");
}

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function shuffleArray(array) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return a;
}

function escapeCharacters(string, all = false) {
    return string.replace(all ? /[\s\S]/g : /[^\0-~]/g, (c) => {
        return "\\u" + ("000" + c.charCodeAt().toString(16)).slice(-4);
    });
}

function resize(width, height, maxWidth, maxHeight) {
    let ratioX = maxWidth / width;
    let ratioY = maxHeight / height;
    let ratio = Math.min(ratioX, ratioY);

    let newWidth = width * ratio;
    let newHeight = height * ratio;

    return { width: Math.round(newWidth), height: Math.round(newHeight) };
}

function swapKeysWithValues(obj) {
    return Object.assign({}, ...Object.entries(obj).map(([a,b]) => ({ [b]: a })));
}

function combinations(s) {
    var result = [];
    var sp = s.toLowerCase().split("");
    for (var i = 0, l = 1 << s.length; i < l; i++) {
        for (var j = i, k = 0; j; j >>= 1, k++) {
            sp[k] = (j & 1) ? sp[k].toUpperCase() : sp[k].toLowerCase();
        }
        var st = sp.join("");
        result.push(st);
    }
    return result;
}

function timesAppeared(string, char) {
	var result = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === char.toString()) {
			result++;
		}
	}
	return result;
}

const random=(l)=>{return[...Array(l)].map(i=>Math.random()>0.5?(~~(Math.random()*36)).toString(36).toUpperCase():(~~(Math.random()*36)).toString(36)).join('')};

module.exports = { Temperature, randomCase, grammar, rainbowText, formatJson, mergeObjects, shuffleArray, escapeCharacters, resize, swapKeysWithValues, combinations, timesAppeared, random };
