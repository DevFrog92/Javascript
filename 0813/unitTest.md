# setTimeout unit test

> https://devramble.netlify.app/fake_timers/

``` javascript
test('setTimeout unit test', () => {
  jest.useFakeTimers();
  const wrapper = shallowMount(App);
  // call setTimeout method
  wrapper.vm.method;

  // Advance timers by 5 seconds
  jest.advanceTimersByTime(5000);

  // Check that alert has been called
  expect(wrapper.vm.variable).toBe('timer stop');
})
```