<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
  </head>
  <body>
    <div id="check_container">
      <div id="formBox">
        <label for="uploadBtn">
          <div class="form_btn" onclick="upLoad()">파일 업로드</div>
        </label>
        <p id="fileName">파일명</p>
        <label for="startBtn">
          <div class="form_btn disabled_div" id="startBtn_div">모의졸업사정</div>
        </label>
        <form action="check.do" method="post" enctype="multipart/form-data">
          <input name="file" type="file" accept=".pdf" id="uploadBtn" />
          <input type="submit" value="모의졸업사정" id="startBtn" disabled/>
        </form>
      </div>

      <div id="guide">
        <div>
          <p>1. mdrims에 접속하여 '취득학점확인서조회' 클릭</p>
          <img src="resources/image/mdrims_1.jpg" alt="img1" />
        </div>
        <div>
          <p>2. 출력포함 옵션에서 아래와 같이 선택 후 출력</p>
          <img src="resources/image/mdrims_2.jpg" alt="img2" />
        </div>
        <div>
          <p>3. 상단의 저장 버튼을 누르고 PDF 옵션 선택</p>
          <img src="resources/image/mdrims_3.jpg" alt="img3" />
        </div>
      </div>

      <!-- <img id="mdrims_img" src="resources/image/mdrims.jpg" alt="mdrims_img"> -->
    </div>
    <script src="resources/js/check.js"></script>
  </body>
</html>
