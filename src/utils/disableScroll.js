
// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

function preventDefault(callback) {
  return function(e) {
    e = e || window.event
    if (e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
      callback(e)
      e.returnValue = false;
    }
  }
}

function disableScroll(target, callback) {
  if (target.addEventListener) {
    target.addEventListener('DOMMouseScroll', preventDefault(callback), false); // older FF
  }
  target.addEventListener('wheel', preventDefault(callback), {passive: false}); // Disable scrolling in Chrome
  target.onwheel = preventDefault(callback); // modern standard
  target.onmousewheel = preventDefault(callback); // older browsers, IE
  target.ontouchmove  = preventDefault(callback); // mobile
}

function enableScroll(target, callback) {
  console.log('enabling scroll of', target)
  if (target.removeEventListener) {
    target.removeEventListener('DOMMouseScroll', preventDefault(callback), false);
  }
  target.removeEventListener('wheel', preventDefault(callback), {passive: false}); // Enable scrolling in Chrome
  target.onwheel = null;
  target.onmousewheel = null;
  target.ontouchmove = null;
}

export {
  disableScroll,
  enableScroll,
}
