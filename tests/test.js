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
        });

    });

});
