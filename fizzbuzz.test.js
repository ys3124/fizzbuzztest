const FizzBuzz = require('./fizzbuzz')

describe('fizzbuzztest', () => {
	it('数字を渡したら文字列を返す', () => {
		const fizzbuzz = new FizzBuzz()
		const actual = fizzbuzz.response(2)
		expect(typeof actual).toBe('string');
		expect(actual).toBe('2');
	})
	it('3の倍数を渡したらFizzを返す', () => {
		const fizzbuzz = new FizzBuzz()
		const actual = fizzbuzz.response(3)
		expect(actual).toBe('Fizz')
	})
	it('5の倍数を渡したらBuzzを返す', () => {
		const fizzbuzz = new FizzBuzz()
		const actual = fizzbuzz.response(5)
		expect(actual).toBe('Buzz')
	})
	it('3と5の倍数を渡したらFizzBuzzを返す', () => {
		const fizzbuzz = new FizzBuzz()
		const actual = fizzbuzz.response(15)
		expect(actual).toBe('FizzBuzz')
	})
})