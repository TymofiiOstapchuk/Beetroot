var eventUtility = {
    addEvent: function(){
        if(typeof addEventListener !== 'undefined') {
            return function(obj, event, fn){
                obj.addEventListener(event, fn, false);
            };
        } else {
            return function(obj, event, fn){
                obj.attachEvent('on' + event, fn);
            }
        }
    },
    removeEvent: function(){
        if(typeof removeEventListener !== 'undefined') {
            return function(obj, event, fn){
                obj.removeEventListener(event, fn, false);
            };
        } else {
            return function(obj, event, fn){
                obj.detachEvent('on' + event, fn);
            }
        }
    }
};
