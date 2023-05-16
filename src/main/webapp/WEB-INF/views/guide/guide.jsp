<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="guide_container">
		<div id="selectBox">
			<div id="box_학과">
				<div id="학과">학과</div>
				<div>
					<select id="select_학과"  onchange="checkSelection()">
					  <option value="">=== 선택 ===</option>
					  <option value="일본학과">일본학과</option>
					  <option value="영어통번역학과">영어통번역학과</option>
					  <option value="의생명공학과">의생명공학과</option>
					</select>
				</div>
			</div>
			<div id="box_학번">
				<div id="학번">학번</div>
				<div>
					<select id="select_학번"  onchange="checkSelection()">
					  <option value="">=== 선택 ===</option>
					  <option value="23">23학번</option>
					  <option value="22">22학번</option>
					  <option value="21">21학번</option>
					</select>
				</div>
			</div>		
		</div>
		<div id="box_confirm">
			<button id="btn_confirm" onclick="curriculum()" disabled>확인</button>
		</div>


	</div>
	<script src="resources/js/guide.js"></script>
</body>
</html>