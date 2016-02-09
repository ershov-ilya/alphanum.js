# alphanum.js
Convert **int** to **alphanumeric** hash of any base, you wants, and back

Simple inlcude module, and use as:

**AlphaNum.encode(num)**

and parse back:

**AlphaNum.parse(alphanum)**

###Example
```
var num=900800700;
console.log('num: '+num);
var alphanum=AlphaNum.encode(num);
console.log('alphanum: '+alphanum);
console.log(AlphaNum.parse(alphanum));
```
outputs:
```
num: 900800700
alphanum: 19vnq0
900800700
```

####Overwrite default alphabet
```
AlphaNum.setAlphabet('0123456789abcdefghijklmnopqrstuvwxyz'); // overwrite default alphabet
var num=900800700;
console.log('num: '+num);
var alphanum=AlphaNum.encode(num);
console.log('alphanum: '+alphanum);
console.log(AlphaNum.parse(alphanum));
```

outputs:
```
num: 900800700
alphanum: ewba9o
900800700
```

Also there is [PHP version](https://github.com/ershov-ilya/alphanum.class.php) of this module
