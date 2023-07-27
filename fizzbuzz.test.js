const FizzBuzz = require('./fizzbuzz')

describe('fizzbuzztest', () => {
	it('数字を渡したら文字列を返す', () => {
		const fizzbuzz = new FizzBuzz()
		const actual = fizzbuzz.response(2)
		expect(typeof actual).toBe('string');
	})
	it('3の倍数を渡したらFizzを返す', () => {
		const fizzbuzz = new FizzBuzz()
		const actual = fizzbuzz.response(3)
		expect(actual).toBe('Fizz')
	})
})