var exec = require('cordova/exec');
/**
 * Constructor
 */
function tts() {}

tts.prototype.init = function() {
    exec(function(result){
        document.dispatchEvent(new CustomEvent('ttsInitSuccess', result));
    },
    function(error){
        document.dispatchEvent(new CustomEvent('ttsInitFailed', result));
    },
    "TtsPlugin",
    "initTTS",
    []
    );
};

tts.prototype.setLanguage = function(lang) {
    exec(function(result){
        document.dispatchEvent(new CustomEvent('ttsSetLanguageSuccess', result));
    },
    function(error){
        document.dispatchEvent(new CustomEvent('ttsSetLanguageFailed', result));
    },
    "TtsPlugin",
    "setLanguage",
    [lang]
    );
};

tts.prototype.setRate = function(rate) {
    exec(function(result){
        document.dispatchEvent(new CustomEvent('ttsSetRateSuccess', result));
    },
    function(error){
        document.dispatchEvent(new CustomEvent('ttsSetRateFailed', result));
    },
    "TtsPlugin",
    "setRate",
    [rate]
    );
};


tts.prototype.speak = function(text) {
    exec(function(result){
        document.dispatchEvent(new CustomEvent('ttsSpeakSuccess', result));
    },
    function(error){
        document.dispatchEvent(new CustomEvent('ttsSpeakFailed', result));
    },
    "TtsPlugin",
    "speak",
    [text]
    );
};

tts.prototype.isSpeaking = function(callback) { //because this is asynchronous we need to pass a callback 
    exec(function(result){
        if(callback){
            callback(result);
        }
        return result;
    },
    function(error){
        console.error(error);
    },
    "TtsPlugin",
    "isSpeaking",
    []
    );
};

tts.prototype.stop = function() {
    exec(function(result){
        document.dispatchEvent(new CustomEvent('ttsStopSuccess', result));
    },
    function(error){
        document.dispatchEvent(new CustomEvent('ttsStopFailed', result));
    },
    "TtsPlugin",
    "stop",
    []
    );
};

tts.prototype.pause = function() {
    exec(function(result){
        document.dispatchEvent(new CustomEvent('ttsPauseSuccess', result));
    },
    function(error){
        document.dispatchEvent(new CustomEvent('ttsPauseFailed', result));
    },
    "TtsPlugin",
    "pause",
    []
    );
};

tts.prototype.resume = function() {
    exec(function(result){
        document.dispatchEvent(new CustomEvent('ttsResumeSuccess', result));
    },
    function(error){
        document.dispatchEvent(new CustomEvent('ttsResumeFailed', result));
    },
    "TtsPlugin",
    "resume",
    []
    );
};

tts.prototype.restart = function() {
    exec(function(result){
        document.dispatchEvent(new CustomEvent('ttsRestartSuccess', result));
    },
    function(error){
        document.dispatchEvent(new CustomEvent('ttsRestartFailed', result));
    },
    "TtsPlugin",
    "restart",
    []
    );
};

var tts = new tts();
module.exports = tts;