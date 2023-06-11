function upLoad(){
    let uploadInput = document.getElementById("uploadBtn");
    
    uploadInput.onchange = function(){
        document.getElementById("fileName").innerHTML = uploadInput.files[0].name;
        document.getElementById("startBtn").disabled = false;
        document.getElementById("startBtn_div").classList.remove("disabled_div");
    }
}

