//js-extras | 2021-01-22

const Temperature = {
    celciusToKelvin: temperature => {
        return temperature + 273.15
    },
    kelvinToCelcius: temperature => {
        return temperature - 273.15
    },
    celciusToFahrenheit: temperature => {
        return (temperature * 9) / 5 + 32
    },
    fahrenheitToCelcius: temperature => {
        return (temperature - 32) / 1.8
    },
    kelvinToFahrenheit: temperature => {
        return temperature * 1.8 - 459.67
    },
    fahrenheitToKelvin: temperature => {
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
    return str.split("").map(v => Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()).join("");
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
    let result = [];
    let index = -1;
    text.split(" ").forEach((line,ind) => {
        result[ind] = "";
        line.split("").forEach((letter, i) => {
            if (index + 1 >= colors.length) index -= colors.length;
            index++;
            result[ind] += colors[index] + letter;
        });
    });
    return reset != undefined ? (result.join(" ") + reset) : result.join(" ");
}

function formatJson(json) {
    return typeof json == "string" ? JSON.stringify(JSON.parse(json), null, "  ") : JSON.stringify(json, null, "  ");
}

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
    return Object.assign({}, ...Object.entries(obj).map(([a, b]) => ({ [b]: a })));
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
   return string.split(char).length - 1;
}

function scroll(text, length, delay, callback) {
    var i = 0;
    setInterval(() => {
        callback(text.slice(i, i + length));
        i++;
        if (i + length > text.length) clearInterval(this);
    }, delay);
}

function getDate() {
    var log_h = (new Date).getHours().toString();
    if (log_h.length == 1) {
        var log_h = "0" + log_h;
    }
    var log_m = (new Date).getMinutes().toString();
    if (log_m.length == 1) {
        var log_m = "0" + log_m;
    }
    var log_s = (new Date).getSeconds().toString();
    if (log_s.length == 1) {
        var log_s = "0" + log_s;
    }
    var log_ms = (new Date).getMilliseconds().toString();
    if (log_ms.length == 1) {
        var log_ms = "00" + log_ms;
    }
    if (log_ms.length == 2) {
        var log_ms = "0" + log_ms;
    }
    return `${log_h}:${log_m}:${log_s}.${log_ms}`;
}

function replaceAll(str, target, replacement) {
    return str.split(target).join(replacement);
}

function formatBytes(bytes, decimals, json = false) {
    if (bytes == 0 && !json) return "0 Bytes";
    if (bytes == 0 && json) return JSON.stringify({ "amount": 0, "type": "Bytes" });
    var k = 1024,
        dm = decimals <= 0 ? 0 : decimals || 2,
        sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    var much = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
    if (json == true) {
        return JSON.stringify({ "amount": much, "type": sizes[i] });
    }
    return `${much}${sizes[i]}`;
}

function randomFixedInteger(length) {
	return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
}

const Base64 = {
    encode: (data) => {
        if(Buffer != undefined) return Buffer.from(data).toString("base64");
        if(btoa != undefined && typeof btoa == "function") return btoa(data);
        throw new Error("Base64 encoding not supported.");
    },
    decode: (data) => {
        if(Buffer != undefined && typeof Buffer == "function") return Buffer.from(data, "base64").toString("ascii");
        if(atob != undefined && typeof atob == "function") return atob(data);
        throw new Error("Base64 decoding not supported.");
    }
};

const random=(l)=>{return[...Array(l)].map(i=>Math.random()>0.5?(~~(Math.random()*36)).toString(36).toUpperCase():(~~(Math.random()*36)).toString(36)).join("")};

class EventSource extends require("events") {
    /**
    * @author Games
    **/
    constructor(url) {
        super();
        this.url = url;
        this.req = (url.startsWith("https") ? require("https") : require("http")).get(this.url, res => {
            let data = "";
            res.on("data", buffer => {
                data += buffer;
                if (data.endsWith("\n\n")) {
                    let firstLineBreak = data.indexOf("\n");
                    let event = data.substr(0, firstLineBreak + 1);
                    event = event.slice(7, event.length - 1);
                    let dataField = data.slice(firstLineBreak + 7);
                    dataField = dataField.slice(0, dataField.length - 2);
                    this.emit(event, dataField);
                    data = "";
                }
            });
        });
    }

    end() {
        this.req.end();
    }
}

module.exports = { Temperature, randomCase, grammar, rainbowText, formatJson, mergeObjects, shuffleArray, escapeCharacters, resize, swapKeysWithValues, combinations, timesAppeared, scroll, getDate, replaceAll, formatBytes, randomFixedInteger, Base64, random, EventSource };
