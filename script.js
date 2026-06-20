const form = document.getElementById("patientForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const patient = {

        name: document.getElementById("name").value,

        age: document.getElementById("age").value,

        gender: document.getElementById("gender").value,

        dob: document.getElementById("doa").value,

        phone: document.getElementById("phone").value,

        disease: document.getElementById("disease").value,

        address: document.getElementById("address").value

    };

    let patients = JSON.parse(localStorage.getItem("patients")) || [];

    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));

    alert("✅ Patient Admitted Successfully!");

    form.reset();

});

function getPatients(){

    return JSON.parse(localStorage.getItem("patients")) || [];

}

function searchPatient(name){

    let patients = getPatients();

    return patients.filter(patient =>

        patient.name.toLowerCase().includes(name.toLowerCase())

    );

}

function deletePatient(index){

    let patients = getPatients();

    patients.splice(index,1);

    localStorage.setItem("patients",JSON.stringify(patients));

}



function updatePatient(index,newData){

    let patients = getPatients();

    patients[index]=newData;

    localStorage.setItem("patients",JSON.stringify(patients));

}
