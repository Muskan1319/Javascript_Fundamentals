function emailfunction() {
    var emailId = document.getElementById("email").value;
    var err1 = document.getElementById("err1")
    var subs = emailId.substring(emailId.indexOf('@') + 1);
    if (emailId == "" || subs == "" || !emailId.includes('@')) {
        err1.innerHTML = "Incorrect format";
        return false
    }
    else {
        err1.innerHTML = "";
        return true
    }
}
function passwordfunction() {
    var regxp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$/;
    var pass = document.getElementById("password").value;
    var err2 = document.getElementById("err2")
    if (pass == "" || !(regxp.test(pass))) {
        err2.innerHTML = "Incorrect passowrd format"
        return false
    }
    else {
        err2.innerHTML = ""
        return true
    }
}
function namefunction() {
    var regxp = /^[a-zA-z]+$/;
    var name = document.getElementById("name").value;
    var err3 = document.getElementById("err3")
    if (name == "" || !(regxp.test(name))) {
        err3.innerHTML = "Name contains only letters"
        return false
    }
    else {
        err3.innerHTML = "";
        return true;
    }
}
function mblfunction() {
    var regxp = /^[6-9][0-9]{9}$/;
    var mbl = document.getElementById("mobile").value;
    var err4 = document.getElementById("err4")
    if (mbl == "" || !(regxp.test(mbl))) {
        err4.innerHTML = "Mobile number invalid"
        return false
    }
    else {
        err4.innerHTML = "";
        return true;
    }
}

function validate() {
    var s1 = emailfunction();
    var s2 = namefunction();
    var s3 = passwordfunction();
    var s4 = mblfunction();
    if (s1 && s2 && s3 && s4) {
        console.log("done")
        return true
    }
    else {
        return false;
    }
}