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
				
				<!-- 
				 ${educationYear }
				 -->
				
				<hr>
			    
			    <p>공교학점:<span style="white-space: pre;">&#9;&#9;</span>${gg }학점<span style="white-space: pre;">&#9;</span>/ 29~31학점</p>

			    <hr>
			    
			    <p>학기학점:<span style="white-space: pre;">&#9;&#9;</span>${hg1 }과목<span style="white-space: pre;">&#9;&#9;</span>/ ${hg2 }과목</p>
			    
			    <hr>
			    
			    <p>전공학점:<span style="white-space: pre;">&#9;&#9;</span>${jg }학점<span style="white-space: pre;">&#9;</span>/ 36학점</p>
			    <p>전공평점:<span style="white-space: pre;">&#9;&#9;</span>OK<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 2.0이상</p>
			    
			    <hr>
			    
			    <p>복수학점:<span style="white-space: pre;">&#9;&#9;</span>${bs }학점<span style="white-space: pre;">&#9;</span>/ 36학점</p>
			    <p>복수평점:<span style="white-space: pre;">&#9;&#9;</span>OK<span style="white-space: pre;">&#9;&#9;&#9;</span>/ 2.0이상</p>
			    
			    <hr>
			    
			    <p>영어강의이수:<span style="white-space: pre;">&#9;</span>PASS</p>
			    <!-- 
			    <p>영어패스제:<span style="white-space: pre;">&#9;&#9;</span><span style="color:red;">FAIL</span></p>
			     -->
			    <p>총취득예정학점:<span style="white-space: pre;">&#9;</span><span style="color:red;">${totalExpectedCredit }학점</span><span style="white-space: pre;">&#9;</span>/ 130학점</p>
			    
			    <hr>
			    
			    <p>졸업 가능 여부:<span style="white-space: pre;">&#9;</span><span style="color:red;">${canGraduate }</span></p>
			</div>
		</c:otherwise>
	</c:choose>
</body>
</html>