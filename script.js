	let input = document.getElementById('input'),
		todo = document.getElementById('for-todo'),
		checkbox = document.querySelector('input[type="checkbox"]'),
		controlpanel = document.querySelector('.control-panel'),
		itemleft = document.querySelector('.item-left'),
		sort = document.getElementsByClassName('sort-item'),
		clearrr = document.getElementById('clear'),
		objDate = [],
		completedArr = [];


class ToDo {

	createBlock() {
		var createDiv = document.createElement('div'),
			createLabel = document.createElement('label'),
			createInput = document.createElement('input'),
			createCheckBox = document.createElement('span'),
			createClose = document.createElement('span'),
			todo = document.getElementById('for-todo'),
			date = new Date().getTime();

		createLabel.className = 'container';
		createCheckBox.className = 'checkmark';
		createClose.className = 'close';
		createInput.className = 'checkbox';
		createInput.setAttribute('type', 'checkbox');
		createClose.addEventListener("click", closeBlock);
		createInput.addEventListener("click", lineTh);
		createDiv.setAttribute('class', 'todo__block');
		createLabel.innerHTML = input.value;
		createLabel.appendChild(createInput);
		createLabel.appendChild(createCheckBox);
		createDiv.appendChild(createLabel);
		todo.appendChild(createDiv);
		createDiv.appendChild(createClose);
		controlpanel.style.display = "flex";
		completedArr.push(date);

	}

}	


let hide = document.getElementsByClassName('hide-show')

hide[1].onclick = function() {
	todo.style.display = "none"
	controlpanel.style.display = "none"
	hide[1].style.display = "none"
	hide[0].style.display ="block"
}

hide[0].onclick = function() {
	todo.style.display = "block"
	controlpanel.style.display = "flex"
	hide[0].style.display = "none"
	hide[1].style.display ="block"
}

input.onkeypress = function(e = event) {
	if (e.keyCode == 13) {
		if (input.value === '') {
			return
		}
		else {
		
		var firstBlock = new ToDo();
		firstBlock.createBlock();
		input.value = '';
		countItem(completedArr)
		hide[1].style.display = "block"
		}
		
	}
}



function closeBlock(e = event) {
	close(this)
}


function close(value) {
	value.parentNode.remove();
	completedArr.pop()
	countItem(completedArr)
}

function countItem(arr) {
	if (arr.length == 1) {
		itemleft.innerHTML = 1 + ' item left';
	}

	else if (arr.length == 0) {
		controlpanel.style.display = "none"
		hide[1].style.display = "none"
	}
	
	else {
		itemleft.innerHTML = arr.length + ' items left';
	}
}



function lineTh() {
	let node = this.parentNode;

	if (node.classList.contains('text-decor')) {
		node.classList.remove('text-decor')
	} 
	else {
		node.classList.add('text-decor')
	}
}


function sortAll() {
	let sortDiv = document.getElementsByClassName('todo__block') 
	for (let i = 0; i < sortDiv.length; i++) {
		sortDiv[i].style.display = 'block'
	}

	if (sort[0].classList.contains('active')) {

	}

	else {
		sort[0].classList.add('active');
		sort[1].classList.remove('active')
		sort[2].classList.remove('active')
	}
}

function sortActive() {
	let sortLabel = document.getElementsByClassName('text-decor'),
		node,
		node2,
		sortLabelActive = document.getElementsByClassName('container');
	for (let i = 0; i < sortLabelActive.length; i++) {
		node = sortLabelActive[i].parentNode
		node.style.display = "block"
	}	
	for (let i = 0; i < sortLabel.length; i++) {
		node = sortLabel[i].parentNode
		node.style.display = "none"
	}
	
	if (sort[1].classList.contains('active')) {

	}

	else {
		sort[1].classList.add('active');
		sort[0].classList.remove('active')
		sort[2].classList.remove('active')
	}
}


function sortCompleted() {
	let sortLabelComp = document.getElementsByClassName('text-decor'),
		node,
		node2,
		sortLabelActive = document.getElementsByClassName('container');

	for (let i = 0; i < sortLabelActive.length; i++) {
		node = sortLabelActive[i].parentNode
		node.style.display = "none"
	}

	for (let i = 0; i < sortLabelComp.length; i++) {
		node2 = sortLabelComp[i].parentNode
		node2.style.display = "block";
	}
	if (sort[2].classList.contains('active')) {

	}

	else {
		sort[2].classList.add('active');
		sort[1].classList.remove('active')
		sort[0].classList.remove('active')
	}
}


function clearComp() {
	let labelCompleted = document.querySelectorAll('.text-decor');
	for (let i = 0; i < labelCompleted.length; i++) {
		close(labelCompleted[i])
	}
}
