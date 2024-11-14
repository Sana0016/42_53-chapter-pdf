// =================== CHAPTER 43_52 =============================//
// ======================= QUESTION_01 =======================//
// function showAlert() {
//     alert("Hello, World!");
//   }
// ======================= QUESTION_02 =======================//
// var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0X7VZMenfYetz3hVgev3EztzJb8B3WYxmrHJF4VC5Jd43KUt4HWEKmX-jPehyVTqvIKg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42btB3i0xHAAE3Z90b9ePNJkisqOvThKjE0JcBqB74S-hW19YDM7VttiDFBV2fnNs6Io&usqp=CAU", "https://opsg-img-cdn-gl.heytapimg.com/epb/202406/26/TiM1Gzwu2tfEAyVT.png"];
// var imageContainer = document.getElementById("image-container");

// for (let i = 0; i < images.length; i++) {
// 	var img = document.createElement("img");
// 	img.src = images[i];
// 	img.onclick = function() {
// 		alert(`Image ${i + 1} clicked! \r thanks for purchasing a phone from us!`);
// 	};
// 	imageContainer.appendChild(img);
// }
// ======================= QUESTION_03 =======================//
// var rollNos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var names = ["sana", "hajra", "sonia", "dua", "fatima", "urooj", "hania", "alishba", "labika", "kinza"];
// var classes = ["10th", "9th", "11th", "10th", "9th", "11th", "10th", "9th", "11th", "10th"];

// // Function to create table rows
// function createTableRow(rollNo, name, classVal, index) {
// 	var row = document.createElement("tr");
// 	row.innerHTML = `
// 		<td>${rollNo}</td>
// 		<td>${name}</td>
// 		<td>${classVal}</td>
// 		<td><button onclick="deleteRow(${index})">Delete</button></td>
// 	`;
// 	return row;
// }

// // Function to delete table row
// function deleteRow(index) {
// 	var tableBody = document.getElementById("student-records");
// 	tableBody.deleteRow(index);
// 	rollNos.splice(index, 1);
// 	names.splice(index, 1);
// 	classes.splice(index, 1);
// }

// // Create table rows
// var tableBody = document.getElementById("student-records");
// for (let i = 0; i < rollNos.length; i++) {
// 	tableBody.appendChild(createTableRow(rollNos[i], names[i], classes[i], i));
// }

// ======================= QUESTION_04 =======================//
// var imageElement = document.getElementById("image");

// function swapImage() {
// 	imageElement.src = "https://i0.wp.com/static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg";
// }

// function resetImage() {
// 	imageElement.src = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yODUtcC5wbmc.png";
// }

// ======================= QUESTION_05 =======================//
// var count = 0;

// function increaseCounter() {
// 	count++;
// 	document.getElementById("counter").innerText = count;
// }

// function decreaseCounter() {
// 	if (count > 0) {
// 		count--;
// 		document.getElementById("counter").innerText = count;
// 	}
// }
// ================chapter 49_53
// ======================= QUESTION_01 =======================//
// document.getElementById("signup-form").addEventListener("submit", function(event) {
// 	event.preventDefault();
// 	var name = document.getElementById("name").value;
// 	var email = document.getElementById("email").value;
// 	var password = document.getElementById("password").value;
	
// 	var formData = `
// 		<h2>Form Data:</h2>
// 		<p>Name: ${name}</p>
// 		<p>Email: ${email}</p>
// 		<p>Password: ${password}</p>
// 	`;
	
// 	document.getElementById("form-data").innerHTML = formData;
// });

// ======================= QUESTION_02 =======================//
// function readMore(id) {
// 	 var description = document.getElementById(`description-${id}`);
// 	var fullDescription = document.getElementById(`full-description-${id}`);
// 	var readMoreButton = document.querySelector(`button[onclick="readMore(${id})"]`);
// 	var readLessButton = document.querySelector(`button[onclick="readLess(${id})"]`);
	
// 	description.style.display = "none";
// 	fullDescription.style.display = "block";
// 	readMoreButton.style.display = "none";
// 	readLessButton.style.display = "block";
// }

// function readLess(id) {
//     var readMoreButton = document.querySelector(`button[onclick="readMore(${id})"]`);
// 	var readLessButton = document.querySelector(`button[onclick="readLess(${id})"]`);
// 	var description = document.getElementById(`description-${id}`);
//     var fullDescription = document.getElementById(`full-description-${id}`);
	
// 	description.style.display = "block";
// 	fullDescription.style.display = "none";
// 	readMoreButton.style.display = "block";
// 	readLessButton.style.display = "none";
// }

// ======================= QUESTION_03 =======================//
// var students = [];
// var studentForm = document.getElementById("student-form");
// var studentTable = document.getElementById("student-table");
// var editForm = document.getElementById("edit-form");
// var submitBtn = document.getElementById("submit-btn");
// var updateBtn = document.getElementById("update-btn");
// var cancelBtn = document.getElementById("cancel-btn");

// submitBtn.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	var name = document.getElementById("name").value;
// 	var rollNo = document.getElementById("roll-no").value;
// 	var classVal = document.getElementById("class").value;
	
// 	students.push({ name, rollNo, class: classVal });
// 	renderTable();
// 	clearForm();
// });

// function renderTable() {
// 	var tableBody = document.getElementById("student-records");
// 	tableBody.innerHTML = "";
// 	students.forEach((student, index) => {
// 		var row = document.createElement("tr");
// 		row.innerHTML = `
// 			<td>${student.name}</td>
// 			<td>${student.rollNo}</td>
// 			<td>${student.class}</td>
// 			<td>
// 				<button onclick="deleteRow(${index})">Delete</button>
// 				<button onclick="editRow(${index})">Edit</button>
// 			</td>
// 		`;
// 		tableBody.appendChild(row);
// 	});
// }

// function deleteRow(index) {
// 	students.splice(index, 1);
// 	renderTable();
// }

// function editRow(index) {
// 	editForm.classList.remove("hidden");
// 	studentForm.classList.add("hidden");
// 	var student = students[index];
// 	document.getElementById("edit-name").value = student.name;
// 	document.getElementById("edit-roll-no").value = student.rollNo;
// 	document.getElementById("edit-class").value = student.class;
	
// 	updateBtn.addEventListener("click", () => {
// 		student.name = document.getElementById("edit-name").value;
// 		student.rollNo = document.getElementById("edit-roll-no").value;
// 		student.class = document.getElementById("edit-class").value;
// 		renderTable();
// 		editForm.classList.add("hidden");
// 		studentForm.classList.remove("hidden");
// 	});
	
// 	cancelBtn.addEventListener("click", () => {
// 		editForm.classList.add("hidden");
// 		studentForm.classList.remove("hidden");
// 	});
// }

// function clearForm() {
// 	document.getElementById("name").value = "";
// 	document.getElementById("roll-no").value = "";
// 	document.getElementById("class").value = "";
// }


