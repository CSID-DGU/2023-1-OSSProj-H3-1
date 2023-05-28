function checkSelection() {
    var select_학과 = document.getElementById('input_학과');
    var select_학번 = document.getElementById('input_학번');
    var button = document.getElementById('btn_confirm');

    if (select_학과.value !== '' && select_학번.value !== '') {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
}

function curriculum(){
    var inputText = document.getElementById("input_학과").value;
    document.getElementById("curriculum_p").innerHTML = (inputText + " 커리큘럼가이드")
    document.getElementById("curriculum_img").innerHTML = 
    	`<img src="resources/image/guide/의생1.png" alt="의생1">
    	<img src="resources/image/guide/의생2.png" alt="의생2">
    	<img src="resources/image/guide/의생3.png" alt="의생3">`
}