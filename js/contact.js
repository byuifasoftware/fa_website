var fa_slideSpeed = 2;	// Higher value = faster
var fa_timer = 10;	// Lower value = faster

var objectIdToSlideDown = false;
var fa_activeId = false;
var fa_slideInProgress = false;
var fa_slideInProgress = false;
var fa_expandMultiple = false; // true if you want to be able to have multiple items expanded at the same time.

function showHideContent(e,inputId)
{
	if(fa_slideInProgress)return;
	fa_slideInProgress = true;
	if(!inputId)inputId = this.id;
	inputId = inputId + '';
	var numericId = inputId.replace(/[^0-9]/g,'');
	var answerDiv = document.getElementById('fa_a' + numericId);

	objectIdToSlideDown = false;

	if(!answerDiv.style.display || answerDiv.style.display=='none'){
		if(fa_activeId &&  fa_activeId!=numericId && !fa_expandMultiple){
			objectIdToSlideDown = numericId;
			slideContent(fa_activeId,(fa_slideSpeed*-1));
		}else{

			answerDiv.style.display='block';
			answerDiv.style.visibility = 'visible';

			slideContent(numericId,fa_slideSpeed);
		}
	}else{
		slideContent(numericId,(fa_slideSpeed*-1));
		fa_activeId = false;
	}
}

function slideContent(inputId,direction)
{

	var obj =document.getElementById('fa_a' + inputId);
	var contentObj = document.getElementById('fa_ac' + inputId);
	height = obj.clientHeight;
	if(height==0)height = obj.offsetHeight;
	height = height + direction;
	rerunFunction = true;
	if(height>contentObj.offsetHeight){
		height = contentObj.offsetHeight;
		rerunFunction = false;
	}
	if(height<=1){
		height = 1;
		rerunFunction = false;
	}

	obj.style.height = height + 'px';
	var topPos = height - contentObj.offsetHeight;
	if(topPos>0)topPos=0;
	contentObj.style.top = topPos + 'px';
	if(rerunFunction){
		setTimeout('slideContent(' + inputId + ',' + direction + ')',fa_timer);
	}else{
		if(height<=1){
			obj.style.display='none';
			if(objectIdToSlideDown && objectIdToSlideDown!=inputId){
				document.getElementById('fa_a' + objectIdToSlideDown).style.display='block';
				document.getElementById('fa_a' + objectIdToSlideDown).style.visibility='visible';
				slideContent(objectIdToSlideDown,fa_slideSpeed);
			}else{
				fa_slideInProgress = false;
			}
		}else{
			fa_activeId = inputId;
			fa_slideInProgress = false;
		}
	}
}



function initShowHideDivs()
{
	var divs = document.getElementsByTagName('DIV');
	var divCounter = 1;
	for(var no=0;no<divs.length;no++){
		if(divs[no].className=='fa_question'){
			divs[no].onclick = showHideContent;
			divs[no].id = 'fa_q'+divCounter;
			var answer = divs[no].nextSibling;
			while(answer && answer.tagName!='DIV'){
				answer = answer.nextSibling;
			}
			answer.id = 'fa_a'+divCounter;
			contentDiv = answer.getElementsByTagName('DIV')[0];
			contentDiv.style.top = 0 - contentDiv.offsetHeight + 'px';
			contentDiv.className='fa_answer_content';
			contentDiv.id = 'fa_ac' + divCounter;
			answer.style.display='none';
			answer.style.height='1px';
			divCounter++;
		}
	}
}
window.onload = initShowHideDivs;



