function upLoad(){
    let uploadInput = document.getElementById("uploadInput");
    uploadInput.click();

    uploadInput.onchange = () => {
        const uploadedFile = uploadInput.files[0];
        
    };
}

