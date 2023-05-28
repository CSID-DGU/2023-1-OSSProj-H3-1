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
				  <input type="text" list="list_학과" id="input_학과" 
				  		 onchange="checkSelection()"/>
				  <datalist id ="list_학과">
				    <option value="일본학과"/>
				    <option value="영어통번역학과" />
				    <option value="의생명공학과" />
				  </datalist>
				</div>
			</div>
			<div id="box_학번">
				<div id="학번">학번</div>
				<div>
				  <input type="text" list="list_학번" id="input_학번" 
				  		 onchange="checkSelection()"/>
				  <datalist id ="list_학번">
				    <option value="23학번"/>
				    <option value="22학번" />
				    <option value="21학번" />
				  </datalist>
				</div>
			</div>		
		</div>
		<div id="box_confirm">
			<button id="btn_confirm" onclick="curriculum()" disabled>확인</button>
		</div>
		<div id="curriculum">
			<p id="curriculum_p">커리큘럼가이드</p>
			<p id="curriculum_p1"></p>
    		<div id=curriculum_img1></div>
			<p id="curriculum_p2"></p>
			<div id=curriculum_img2></div>
			<p id="curriculum_p3"></p>
			<div id=curriculum_img3></div>
    	</div>

	</div>
	<script src="resources/js/guide.js"></script>
</body>
</html>