describe("AlphaNum", function() {

    describe("Используемый алфавит: 0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ", function() {
        AlphaNum.setAlphabet('0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ');
        var maxRaw=Number.MAX_SAFE_INTEGER;
        if(!maxRaw) maxRaw=9007199254740991;
        var maxEncoded=AlphaNum.encode(maxRaw);

        describe("Кодирование чисел", function() {
            it('Кодирование 1, должно быть: "1"', function() {
                assert.equal(AlphaNum.encode(1), 1);
            });
            it('Кодирование 10, должно быть: "a"', function() {
                assert.equal(AlphaNum.encode(10), 'a');
            });
            it('Кодирование 100000, должно быть: "sLF"', function() {
                assert.equal(AlphaNum.encode(100000), "sLF");
            });
            it('Кодирование 100000000, должно быть: "7HXLF"', function() {
                assert.equal(AlphaNum.encode(100000000), "7HXLF");
            });
            it('Кодирование 1000000000000, должно быть: "mr0uCLF"', function() {
                assert.equal(AlphaNum.encode(1000000000000), "mr0uCLF");
            });
            describe("Максимальное число для кодирования (Number.MAX_SAFE_INTEGER)", function() {
                it('Кодирование '+maxRaw+', должно быть: "TCAxnuIBw" (в моём Chrome)', function () {
                    assert.equal(AlphaNum.encode(maxRaw), "TCAxnuIBw");
                });
            });
        });


        describe("Декодирование чисел", function() {
            it('Декодирование "1", должно быть: 1', function() {
                assert.equal(AlphaNum.decode("1"), 1);
            });
            it('Декодирование "a", должно быть: 10', function() {
                assert.equal(AlphaNum.decode("a"), 10);
            });
            it('Декодирование "sLF", должно быть: 100000', function() {
                assert.equal(AlphaNum.decode("sLF"), 100000);
            });
            it('Декодирование "7HXLF", должно быть: 100000000', function() {
                assert.equal(AlphaNum.decode("7HXLF"), 100000000);
            });
            it('Декодирование "mr0uCLF", должно быть: 1000000000000', function() {
                assert.equal(AlphaNum.decode("mr0uCLF"), 1000000000000);
            });
            it('Декодирование "ZxeHighLF", должно быть: 10000000000000000', function() {
                assert.equal(AlphaNum.decode("ZxeHighLF"), 10000000000000000);
            });
            it('Декодирование "2KnUaQKg30cF", должно быть: 100000000000000000000', function() {
                assert.equal(AlphaNum.decode("2KnUaQKg30cF"), 100000000000000000000);
            });
            describe("Максимальное число для декодирования", function() {
                it('Декодирование "'+maxEncoded+'", должно быть: '+maxRaw, function() {
                    assert.equal(AlphaNum.decode(maxEncoded), maxRaw);
                });
            });
        });

    });

});
