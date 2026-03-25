(function(){
    this.assert = function(ob, st) {
        var li = document.createElement("li");
        li.className = ob == true ? 'pass' : "fail";
        var text = document.createTextNode(st);
        li.appendChild(text);
        document.getElementById("results").appendChild(li);
    }
}());
