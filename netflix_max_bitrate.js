let ready = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

let fn = function () {
  window.dispatchEvent(new KeyboardEvent('keydown', {
    keyCode: 83,
    ctrlKey: true,
    altKey: true,
    shiftKey: true,
  }));

  const VIDEO_SELECT = document.evaluate(
    "//div[text()='Video Bitrate']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;

  const AUDIO_SELECT = document.evaluate(
    "//div[text()='Audio Bitrate']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;

  const BUTTON = document.evaluate(
    "//button[text()='Override']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;

  if (!(VIDEO_SELECT && AUDIO_SELECT && BUTTON)){
    return false;
  }

  [VIDEO_SELECT, AUDIO_SELECT].forEach(function (el) {
    let parent = el.parentElement;

    let options = parent.querySelectorAll('select > option');

    for (var i = 0; i < options.length - 1; i++) {
      options[i].removeAttribute('selected');
    }

    options[options.length - 1].setAttribute('selected', 'selected');
  });

  BUTTON.click();

  return true;
};

let run = function () {
  fn() || setTimeout(run, 100);
};

run();
