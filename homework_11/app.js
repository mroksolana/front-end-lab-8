const rootNode = document.getElementById("root");


function createTree(structure) {

	let newUl = document.createElement("ul");

	for (let i = 0; i < structure.length; i++) {
		let newLi = document.createElement("li");
		let newIcon = document.createElement("i");
		let newParag = document.createElement("p");
		let newDiv = document.createElement("div");

		newIcon.className = "material-icons";

		newLi.appendChild(newDiv);
		newUl.appendChild(newLi);
		newDiv.appendChild(newIcon);
		newDiv.appendChild(newParag);

		if (structure[i].folder) {
			newIcon.innerHTML = "folder";
			newParag.addEventListener("onclick", openTree);

			if (structure[i].children) {
				createTree(structure[i].children, newLi);
			} else {
				let newParag = document.createElement("newParag");
				newParag.mainContent = "Folder is empty";
				newLi.appendChild(newParag);
				newParag.classList.add("emptyFolder");
			}
		} else {
			newIcon.innerHTML = "insert_drive_file";
			newIcon.classList.add("file");
		}

	}
	return newUl;

}


function openTree() {
	let datum = this.nextElementSibling;
	if (datum) {
		let newIcon = this.firstChild;
		if (datum.style.display == "block") {
			datum.style.display == "none";
			newIcon.innerHTML = "folder"
		} else {
			datum.style.display = "block";
			newIcon.innerHTML = "folder_open";
		}
	}
}


let result = document.createElement("div");
createTree(structure, result);

rootNode.appendChild(result);
