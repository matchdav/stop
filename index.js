
/**
 * really truly finally stop on the given `e`.  as in you just want the 
 * 
 * examples:
 * 
 *      anchor.onclick = require('stop');
 *      anchor.onclick = function(e){
 *        if (!some) return require('stop')(e);
 *      };
 * 
 * 
 * @param {Event} e
 */

module.exports = function stop(e){
	e = e || window.event;
	if(e.preventDefault) e.preventDefault(); //do jQuery things if supported.
	return e.stopPropagation && e.stopPropagation() || e.cancelBubble=true;
}
