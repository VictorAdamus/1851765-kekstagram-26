//время на показ сообщения об ошибке
const ALERT_SHOW_TIME = 8000;
//сообщение об ошибке
const showAlertErr = (text) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 50px';
  alertContainer.style.width = '500px';
  alertContainer.style.marginTop = '325px';
  alertContainer.style.border = '2px solid #ffffff';
  alertContainer.style.marginLeft = '-250px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.fontSize = '18px';
  alertContainer.style.backgroundColor = '#000000';
  alertContainer.style.color = '#ffffff';
  alertContainer.textContent = text;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

//находим целое положительное случайное число из промежутка чисел a и b.
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//проверяем нажата ли клавиша esc
const isEscapeKey = (evt) => evt.key === 'Escape';

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {debounce, getRandomPositiveInteger, isEscapeKey,showAlertErr};
