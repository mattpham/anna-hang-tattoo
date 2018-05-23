const cache = new Map();

/*
  Function to load an external script into document body and cache if loaded.
  @param src - Source of the script.
  @param [callbackName] - name of the callback function to be executed.
  @return Promise object.
*/
const cachedScriptLoader = (src, callbackName) =>
  cache.get(src) ||
  new Promise((resolve, reject) => {
    /* eslint-disable no-undef */
    const body = document.getElementsByTagName('body')[0];
    const scriptTag = document.createElement('script');
    /* eslint-enable */

    scriptTag.type = 'text/javascript';
    scriptTag.async = false;
    scriptTag.src = src;

    const handleResult = status => (evt) => {
      if (status === 'success') {
        resolve(evt);
        cache.set(src, Promise.resolve(evt));
      } else {
        reject(new Error(`Script load error: ${src}`));
      }

      // remove callback reference if it exists
      /* eslint-disable no-undef */
      if (window[callbackName] && typeof window[callbackName] === 'function') {
        delete window[callbackName];
      }
      /* eslint-enable */
    };

    // Let script callback sucess function if parameter present, otherwise event handler
    // will signal success;
    if (callbackName) {
      // eslint-disable-next-line no-undef
      window[callbackName] = handleResult('success');
    } else {
      scriptTag.onload = handleResult('success');
    }

    scriptTag.onerror = handleResult('error');

    // Add script to document body to initiate
    body.appendChild(scriptTag);
  });

export default cachedScriptLoader;
