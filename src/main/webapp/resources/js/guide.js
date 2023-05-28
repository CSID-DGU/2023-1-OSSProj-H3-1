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
    if(inputText == "의생명공학과"){
        document.getElementById("curriculum_p1").innerHTML = "바이오시스템대학 최저학점이수 기준표"
        document.getElementById("curriculum_img1").innerHTML = 
        `<img src="resources/image/guide/바시대.jpg" alt="바시대">`
        document.getElementById("curriculum_p2").innerHTML = inputText + "개설과목"
        document.getElementById("curriculum_img2").innerHTML = 
        `<img src="resources/image/guide/의생_개설과목.png" alt="의생_개설과목">`
        document.getElementById("curriculum_p3").innerHTML = inputText + "이수가이드"
        document.getElementById("curriculum_img3").innerHTML = 
        `<img src="resources/image/guide/의생_이수가이드1.png" alt="의생_이수가이드1">
        <img src="resources/image/guide/의생_이수가이드2.png" alt="의생_이수가이드2">`
    }

    else if(inputText == "일본학과"){
        document.getElementById("curriculum_p1").innerHTML = "문과대학 최저학점이수 기준표"
        document.getElementById("curriculum_img1").innerHTML = 
        `<img src="resources/image/guide/문과대.jpg" alt="문과대">`
        document.getElementById("curriculum_p2").innerHTML = inputText + "개설과목"
        document.getElementById("curriculum_img2").innerHTML = 
        `<img src="resources/image/guide/일본_개설과목.png" alt="일본_개설과목">`
        document.getElementById("curriculum_p3").innerHTML = inputText + "이수가이드"
        document.getElementById("curriculum_img3").innerHTML = 
        `<img src="resources/image/guide/일본_이수가이드.png" alt="일본_이수가이드">`
    }

    else if(inputText == "영어통번역학과"){
        document.getElementById("curriculum_p1").innerHTML = "문과대학 최저학점이수 기준표"
        document.getElementById("curriculum_img1").innerHTML = 
        `<img src="resources/image/guide/문과대.jpg" alt="문과대">`
        document.getElementById("curriculum_p2").innerHTML = inputText + "개설과목"
        document.getElementById("curriculum_img2").innerHTML = 
        `<img src="resources/image/guide/영통_개설과목.png" alt="영통_개설과목">`
        document.getElementById("curriculum_p3").innerHTML = inputText + "이수가이드"
        document.getElementById("curriculum_img3").innerHTML = 
        `<img src="resources/image/guide/영통_이수가이드1.png" alt="영통_이수가이드1">
        <img src="resources/image/guide/영통_이수가이드2.png" alt="영통_이수가이드2">`
    }



}