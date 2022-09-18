function TestThrottle() {
  return <input onChange={(event) => handleChangeThrottle(event)}></input>;
}
const handleChangeThrottle = throttle(function handleChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  const value = event.target.value;
  console.log(value);
},
2000);

function throttle(fn: any, delay: number) {
  let timer: number | null = null;
  return function (...arg: any) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
}

function debounce(fn:any, delay: number) {
  let time = 0;
  return function () {
    let now = Date.now();
    if (now - time >= delay) {
      fn();
      time = now;
    }
  };
}
export default TestThrottle;
