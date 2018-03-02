function loadScript(src, cb) {
  const script = document.createElement('script');
  script.type = 'text/javascript';

  script.onerror = error => {
    throw new URIError('The script' + error.target.src + ' is not accessible.');
  };
  script.onload = () => {
    if (typeof(cb) === 'function') {
      cb();
    }
  };

  script.src = src;
  // Setting async to false queues execution, but doesn't block rendering while downloading
  script.async = false;
  document.body.appendChild(script);
}

export default loadScript;
