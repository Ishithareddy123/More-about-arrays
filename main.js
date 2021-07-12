var students=[];

function submit(){
    var name_1=document.getElementById("Student_1").value;
    var name_2=document.getElementById("Student_2").value;
    var name_3=document.getElementById("Student_3").value;
    var name_4=document.getElementById("Student_4").value;
    students.push(name_1,name_2,name_3,name_4);
    console.log(students);
    document.getElementById("student_names").innerHTML=students;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    students.sort();
    document.getElementById("student_names").innerHTML=students;
    console.log(students);
}