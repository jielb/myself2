function isCompact(elem1,elem2){
	var ol1 = elem1.offsetLeft
	var L1 = elem1.offsetWidth + ol1;
	var ot1 = elem1.offsetTop
	var T1 = elem1.offsetHeight + ot1;
	
	var ol2 = elem2.offsetLeft
	var L2 = elem2.offsetWidth + ol2;
	var ot2 = elem2.offsetTop
	var T2 = elem2.offsetHeight + ot2;
	
	if(L1<=ol2||L2<=ol1||T1<=ot2||T2<=ot1){
		return false;
	}else{
		return true;		
	}
}


 
