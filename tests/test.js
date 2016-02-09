describe("AlphaNum", function() {

    describe("Используемый алфавит: 0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ", function() {
        AlphaNum.setAlphabet('0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ');

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
            it('Кодирование 10000000000000000, должно быть: "ZxeHighLF"', function() {
                assert.equal(AlphaNum.encode(10000000000000000), "ZxeHighLF");
            });
            it('Кодирование 100000000000000000000, должно быть: "2KnUaQKg30cF"', function() {
                assert.equal(AlphaNum.encode(100000000000000000000), "2KnUaQKg30cF");
            });
            describe("Максимальное число для кодирования", function() {
                it('Кодирование 999999999999999934463, должно быть: "syP1NsxFuNg8"', function () {
                    assert.equal(AlphaNum.encode(999999999999999934463), "syP1NsxFuNg8");
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
            it('Декодирование "syP1NsxFuNg8", должно быть: 999999999999999934463', function() {
                assert.equal(AlphaNum.decode("syP1NsxFuNg8"), 999999999999999934463);
            });
        });

    });

});
