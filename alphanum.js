/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 03.09.2015
 * Time: 18:28
 */

var AlphaNum=(function(){
    var PUBLIC={};

    // Private methods
    var config={};

    PUBLIC.config=function(options){
        if(typeof options == 'undefined'){
            return false;
        }
        if(typeof $ != 'undefined'){
            // Deep clone copy
            config= $.extend(true, config,options);
            return true;
        }
        for(k in options){
            config[k]=options[k];
        }
        return false;
    };
    PUBLIC.encode=function(input){};
    PUBLIC.parse=function(input){};

    return PUBLIC;
})();