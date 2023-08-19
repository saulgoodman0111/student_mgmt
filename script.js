// const studentTable = document.getElementById("student-table");
// // console.log(studentTable);
// const Studentform = document.getElementById("studentForm");
// const addStudentBtn = document.querySelector(".add-student-btn");

// function displayOnPage() {
//   studentTable.innerHTML = "";
//   const newRow = document.createElement("tr");
//   newRow.innerHTML = `
//                 <td>ID</td>
//                 <td>ssp</td>
//                 <td>${Studentform.email}</td>
//                 <td>${Studentform.age}</td>
//                 <td>${Studentform.gpa}</td>
//                 <td>${Studentform.degree}</td>`;
  
//                 studentTable.append(newRow);
               
// }
// console.log(studentTable);


// document.getElementById("studentForm").addEventListener("submit" , (e) =>{
//     e.preventDefault();

// ADD DATA TO PAGE //

    const Form = document.getElementById("studentForm");
    Form.addEventListener("submit", addEntry);

    function addEntry(sevent)
    {
    sevent.preventDefault();
    const sname = document.getElementById("name").value;
    const semail = document.getElementById("email").value;
    const sgpa = document.getElementById("gpa").value;
    const sage = document.getElementById("age").value;
    const sdegree =  document.getElementById("degree").value;
    const StudentTable = document.getElementById("student-table");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
                    <td>${Math.floor(Math.random() * 100)}</td>
                    <td>${sname}</td>
                    <td>${semail}</td>
                    <td>${sage}</td>
                    <td>${sgpa}</td>
                    <td>${sdegree}
                    <a href="#" id="edit-btn"><img src="editIcon.png" alt="" height="15px" width="15px"></a>
                    <a href="#" id="del-btn"><img src="trashIcon.png" alt="" height="15px" width="15px"></a>
                    </td>
                    `;
                    StudentTable.append(newRow);
    }


    // DELETE DATA
    