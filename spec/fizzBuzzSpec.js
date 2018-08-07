describe('FizzBuzz', function() {

  var fizzbuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(90)).toBe(true);
    });

    it('divisible by 15', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFifteen(30)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);

    });

    it('divisible by 5', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(3)).toBe(false);

    });

    it('divisible by 15', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFifteen(14)).toBe(false);

    });

  });

});
