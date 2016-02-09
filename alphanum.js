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
    var config={
        alphabet:'0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ',
        base:60
    };

    PUBLIC.init=function($alphabet){
        if(typeof $alphabet == 'undefined') return false;
        config.alphabet=$alphabet;
        config.base=$alphabet.length;
    };

    PUBLIC.setAlphabet=function($alphabet){
        if(typeof $alphabet == 'undefined') return false;
        config.alphabet=$alphabet;
        config.base=$alphabet.length;
    };

    PUBLIC.test = function(){
        console.log(config);
    };

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

    PUBLIC.encode=function($input){
        var $alphabet=config.alphabet;
        var $base=config.base;
        var $num=parseInt($input,10);
        // Защита от переполнения
        if($num>Number.MAX_SAFE_INTEGER) return false;
        var $output='', $rest, $sym;
        do {
            $rest = $num % $base;
            $sym=$alphabet[$rest];
            $output+=$sym;
            $num = Math.floor($num / $base);
        }while($num>0);
        $output=$output.split("").reverse().join("");
        return $output;
    };

    // Synonim for parse
    PUBLIC.decode=function($str){
        return PUBLIC.parse($str);
    };

    PUBLIC.parse=function($str){
        var $alphabet=config.alphabet;
        var $base=config.base;
        var $res=0;
        var $len=$str.length;
        var $last=$len-1;
        for(var $i=0; $i<$len; $i++){
            $pos=$alphabet.indexOf($str[$i]);
            if($pos<0) return false;
            $res+=$pos;
            if($i!=$last) $res *= $base;
        }
        return $res;
    };

    return PUBLIC;
})();
