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
        if(typeof $alphabet == 'undefined') $alphabet='0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
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

    /*
    PUBLIC.parse=function($input){
        $alphabet=AlphaNum::$alphabet;
        $base=AlphaNum::$base;
        $str=rtrim($input,"\n\r");
        $res=0;
        $len=strlen($str);
        $last=$len-1;
        for($i=0; $i<$len; $i++){
            $pos=strpos($alphabet,$str[$i]);
            $res+=$pos;
            if($i!=$last) $res *= $base;
        }
        return $res;
    };
    */

    return PUBLIC;
})();