/*
 * Content script is a script that is executed inside the actual webpage.
 * It has direct access to the DOM.
 */

chrome.runtime.onMessage.addListener(handleMessage);

function handleMessage(req, sender, res) {
   document.querySelector("body").style.backgroundColor = req;
}
