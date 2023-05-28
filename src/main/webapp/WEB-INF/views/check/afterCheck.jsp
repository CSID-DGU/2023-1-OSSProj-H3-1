<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<c:choose>
		<c:when test="${errormessage }">
			<div>
				<h4 style="color: red;">${errormessage }</h4>
			</div>
		</c:when>
		<c:otherwise>
			<div style="font-size: 30px;">
				<p style="font-size: 40px;">모의졸업사정 결과</p>
				
				<hr>
				
			    <p>레벨테스트: ${levelTest}</p>
			    
			    <hr>
			    
			    <p>공교학점:<span style="white-space: pre;">&#9;&#9;</span>28+3학점<span style="white-space: pre;">&#9;</span>/ 29~31학점</p>
			    <!--  -->
			    <p>자기탐색과리더십</p>
			    <p>▶대학탐구:<span style="white-space: pre;">&#9;&#9;</span>1<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 1</p>
			    <p>▶자아성찰:<span style="white-space: pre;">&#9;&#9;</span>4<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 4</p>
			    <p>▶리더십:<span style="white-space: pre;">&#9;&#9;</span>2<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 2</p>
			    <!--  -->
			    <p>전지구적사고와과제</p>
			    <p>▶시민:<span style="white-space: pre;">&#9;&#9;&#9;</span>2<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 2</p>
			    <p>(or지역연구or미래)</p>
			    <!--  -->
			    <p>글로벌의사소통</p>
			    <p>▶글쓰기:<span style="white-space: pre;">&#9;&#9;</span>3<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 3</p>
			    <p>▶영어:<span style="white-space: pre;">&#9;&#9;&#9;</span>6<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 4</p>
			    <!--  -->
			    <p>고전과창의융합</p>
			    <p>▶명작:<span style="white-space: pre;">&#9;&#9;&#9;</span>6+3<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 9</p>
			    <!--  -->
			    <p>4차산업혁명과미래</p>
			    <p>▶SW:<span style="white-space: pre;">&#9;&#9;&#9;</span>4<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 4</p>
			    
			    <hr>
			    
			    <p>학기학점:<span style="white-space: pre;">&#9;&#9;</span>5과목<span style="white-space: pre;">&#9;&#9;</span>/ 4과목</p>
			    
			    <hr>
			    
			    <p>전공학점:<span style="white-space: pre;">&#9;&#9;</span>33+3학점<span style="white-space: pre;">&#9;</span>/ 36학점</p>
			    <p>전공평점:<span style="white-space: pre;">&#9;&#9;</span>OK<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 2.0이상</p>
			    
			    <hr>
			    
			    <p>복수학점:<span style="white-space: pre;">&#9;&#9;</span>30+6학점<span style="white-space: pre;">&#9;</span>/ 36학점</p>
			    <p>복수평점:<span style="white-space: pre;">&#9;&#9;</span>OK<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 2.0이상</p>
			    
			    <hr>
			    
			    <p>영어강의이수:<span style="white-space: pre;">&#9;</span>PASS</p>
			    <p>영어패스제:<span style="white-space: pre;">&#9;&#9;</span><span style="color:red;">FAIL</span></p>
			    <p>총취득예정학점:<span style="white-space: pre;">&#9;</span><span style="color:red;">${totalCredits}학점</span><span style="white-space: pre;">&#9;</span>/ 130학점</p>
			    <p>졸업 가능 여부:<span style="white-space: pre;">&#9;</span><span style="color:red;">${canGraduate}</span></p>
			    <!--
			    <p>레벨테스트: ${levelTest}</p>
			    <p>총 학점: ${totalCredits}</p>
			    <p>졸업 가능 여부: ${canGraduate}</p>
			    <p>졸업 가능 여부: ${canGraduate ? '가능' : '불가능'}</p>
			     -->
			</div>
		</c:otherwise>
	</c:choose>
</body>
</html>