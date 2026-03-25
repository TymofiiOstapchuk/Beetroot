function assert(value, desc){
	var li = document.createElement('li');
	li.style.fontSize="18px";
	li.style.color = value ? 'green':'red';
	li.style.textDecoration = value ? '':'line-through';
	var text = document.createTextNode(desc);
	li.appendChild(text);
	document.getElementById("result").appendChild(li);
}

