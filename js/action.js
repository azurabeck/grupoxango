//#region INPUT FILE NAME

function getFileName() {
    input = document.getElementById('file-name');
    output = document.getElementById('file-output');

    input.addEventListener('change', function (e) {

        output.innerHTML = '';

        for (var i = 0; i < input.files.length; ++i) {
            output.innerHTML += input.files.item(i).name;
        }
    });
  
}

//#endregion

//#region FUNCTION OPEN JUNTE-SE-A-NOS DESCRIPTION

function webDesigner() {
    web_designer = document.getElementById("web_designer")    
    
    if (web_designer.style.display !== "none") {
        web_designer.style.display = "none"
    }
    else {
        web_designer.style.display = "block"
    }   
}

function webDeveloper() {
    web_developer = document.getElementById("web_developer")

    if (web_developer.style.display !== "none") {
        web_developer.style.display = "none"
    }
    else {
        web_developer.style.display = "block"
    }
}

function cMais() {
    c_mais = document.getElementById("c_mais")

    if (c_mais.style.display !== "none") {
        c_mais.style.display = "none"
    }
    else {
        c_mais.style.display = "block"
    }
}

function aspNet() {
   asp_net = document.getElementById("asp_net")

    if (asp_net.style.display !== "none") {
        asp_net.style.display = "none"
    }
    else {
        asp_net.style.display = "block"
    }
}

function sqlDev() {
     sql = document.getElementById("sql")

     if (sql.style.display !== "none") {
        sql.style.display = "none"
    }
    else {
        sql.style.display = "block"
    }
}

function javaDev() {
    java = document.getElementById("java")

    if (java.style.display !== "none") {
        java.style.display = "none"
    }
    else {
        java.style.display = "block"
    }
}

function infArch() {
    inf_arch = document.getElementById("inf_arch")

    if (inf_arch.style.display !== "none") {
        inf_arch.style.display = "none"
    }
    else {
        inf_arch.style.display = "block"
    }
}

function prodMan() {
    prod_man = document.getElementById("prod_man")

    if (prod_man.style.display !== "none") {
        prod_man.style.display = "none"
    }
    else {
        prod_man.style.display = "block"
    }
}

//#endregion