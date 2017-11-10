//get NYC modal element
var modal= document.getElementById('simpleModal'); 
//get open modal button 
var modalBtn = document.getElementById('modalBtn');
//get close button 
var closeBtn = document.getElementsByClassName('closeBtn')[0]; //need to specify first quote

//listen for an open click
modalBtn.addEventListener('click', openModal); 

//listen for a close click
closeBtn.addEventListener('click', closeModal); 

//listen for outside click
window.addEventListener('click', outsideClick);

//function to open modal 
function openModal() {
	modal.style.display= 'block';
}


//function to close modal 
function closeModal() {
	modal.style.display= 'none';
}

//function to close modal if outside click 
function outsideClick(e){
	if(e.target == modal) {
	modal.style.display = 'none'; 
	}
}

//===================================
//get LONDON modal element
//===================================
var londonModal= document.getElementById('londonModal'); 
//get open modal button 
var londonBtn = document.getElementById('londonBtn');
//get close button 
var closeBtnLondon = document.getElementsByClassName('closeBtnLondon')[0]; //need to specify first quote

//listen for an open click
londonBtn.addEventListener('click', openlondonModal); 

//listen for a close click
closeBtnLondon.addEventListener('click', closelondonModal); 

//listen for outside click
window.addEventListener('click', outsideClickLondon);

//function to open modal 
function openlondonModal() {
	londonModal.style.display= 'block';
}


//function to close modal 
function closelondonModal() {
	londonModal.style.display= 'none';
}

//function to close modal if outside click 
function outsideClickLondon(e){
	if(e.target == londonModal) {
	londonModal.style.display = 'none'; 
	}
}

//===================================
//get TOKYO modal element
//===================================
var tokyoModal= document.getElementById('tokyoModal'); 
//get open modal button 
var tokyoBtn = document.getElementById('tokyoBtn');
//get close button 
var closeBtnTokyo = document.getElementsByClassName('closeBtnTokyo')[0]; //need to specify first quote

//listen for an open click
tokyoBtn.addEventListener('click', opentokyoModal); 

//listen for a close click
closeBtnTokyo.addEventListener('click', closetokyoModal); 

//listen for outside click
window.addEventListener('click', outsideClickTokyo);

//function to open modal 
function opentokyoModal() {
	tokyoModal.style.display= 'block';
}

//function to close modal 
function closetokyoModal() {
	tokyoModal.style.display= 'none';
}

//function to close modal if outside click 
function outsideClickTokyo(e){
	if(e.target == tokyoModal) {
	tokyoModal.style.display = 'none'; 
	}
}

