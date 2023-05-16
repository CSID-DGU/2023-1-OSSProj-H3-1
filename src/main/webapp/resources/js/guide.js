function checkSelection() {
    var select_학과 = document.getElementById('select_학과');
    var select_학번 = document.getElementById('select_학번');
    var button = document.getElementById('btn_confirm');

    if (select_학과.value !== '' && select_학번.value !== '') {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
}

function curriculum(){
    document.getElementById('guide_container').innerHTML += 
    `<div id="curriculum">커리큘럼가이드</div>`
}