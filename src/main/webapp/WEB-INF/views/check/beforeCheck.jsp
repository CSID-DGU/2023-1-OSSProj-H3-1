<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="check_container">
	
		<button onclick="upLoad()" id="btn">취득학점확인서 업로드</button>
		<input id="uploadInput" type="file" />
		
		<div id="guide">
			<div>
				<p>1. mdrims에 접속하여 '취득학점확인서조회' 클릭</p>
				<img src="resources/image/mdrims_1.jpg" alt="img1">
			</div>
			<div>
				<p>2. 출력포함 옵션에서 아래와 같이 선택 후 출력</p>
				<img src="resources/image/mdrims_2.jpg" alt="img2">
			</div>
			<div>
				<p>3. 상단의 저장 버튼을 누르고 PDF 옵션 선택</p>
				<img src="resources/image/mdrims_3.jpg" alt="img3">
			</div>
		</div>


		<!-- <img id="mdrims_img" src="resources/image/mdrims.jpg" alt="mdrims_img"> -->
	</div>
	<script src="resources/js/check.js"></script>
</body>
</html>