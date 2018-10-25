function collectionHas(a, b) { //helper function (see below)
    for(var i = 0, len = a.length; i < len; i ++) {
        if(a[i] === b) return true;
    }
    return false;
}
function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) { //keep going up until you find a match
        cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
}

function findCssClassStyle(elm, style){
	var clas_name = document.getElementsByClassName(elm);
	if(clas_name.length <= 0)
		return 0;
		
	var comp = window.getComputedStyle(clas_name[0]).getPropertyValue(style);
	
	return parseInt(comp,10);
}
function setDate(date){
	let x = date.split("-");
	x[2] = x[2].split("T");
	x[2][1] = x[2][1].split(":");
		
	let _new = x[2][0]+" "+x[1]+" "+x[0]+"-"+x[2][1][0]+":"+x[2][1][1];
		
	return _new;
}
	
export{findParentBySelector,findCssClassStyle,setDate}