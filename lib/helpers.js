'use strict'

module.exports =
class Helpers
{
    constructor()
    {

    }

    secondsToMinutes(seconds, callback)
    {
        var hours = 0;
        var minutes = 0;
        hours = Math.floor(seconds / 3600);
        seconds = seconds - (hours * 3600);
        minutes = Math.floor(seconds / 60);
        seconds = (seconds - (minutes * 60)).toFixed(3);

        function str_pad_left(string,pad,length) {
            return (new Array(length+1).join(pad)+string).slice(-length);
        }

        var response = str_pad_left(hours,'0',2)+':'+str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',6);
        return callback(null, response)
    }
}
