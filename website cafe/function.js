function enter() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

     if (name !== "" && email !== "" && password !== "") {
        alert("Welcome " + name + "!");
    } else {
       alert("Fill in all field first!");   
    }
    return
} 