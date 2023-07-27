class FizzBuzz {
	constructor() { }
	response(num) {
		if (num % 3 === 0) {
			return 'Fizz'
		}
		return String(num)
	}
}

module.exports = FizzBuzz