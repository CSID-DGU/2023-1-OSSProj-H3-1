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
			<div id="afterCheck_container">
				<p>모의졸업사정 결과</p>
				
				<hr>
			    
			    <p>공교학점:<span>&#9;&#9;</span>${pdf_gg_credit }학점<span style="white-space: pre;">&#9;&#9;</span>/ ${gg_credit }학점</p>

			    <hr>
			    
			    <p>학기이수:<span>&#9;&#9;</span>${pdf_hg_count }과목<span>&#9;&#9;</span>/ ${hg_count }과목</p>
			    
			    <hr>
			    
			    <p>전공학점:<span>&#9;&#9;</span>${pdf_jg_credit }학점<span>&#9;&#9;</span>/ ${jg_credit }학점</p>
			    <p>전공평점:<span>&#9;&#9;</span>${pdf_jg_GPA }<span>&#9;&#9;</span>/ ${jg_GPA }이상</p>
			    
			    <hr>
			    
			    <p>복수학점:<span>&#9;&#9;</span>${pdf_bs_credit }학점<span>&#9;</span>/ ${bs_credit }학점</p>
			    <p>복수평점:<span>&#9;&#9;</span>${pdf_bs_GPA }<span>&#9;&#9;</span>/ ${bs_GPA }이상</p>
			    
			    <hr>
			    
			    <p>영어강의이수:<span>&#9;</span>${pdf_english_course }</p>

			    <p>영어패스제:<span>&#9;&#9;</span>${pdf_english_pass }</p>
			    
			    
			    <p>총취득예정학점:<span>&#9;</span>${pdf_total_credit }학점<span>&#9;</span>/ ${total_credit }학점</p>
			    
			    <hr>
			    
			    <p>졸업가능여부:<span>&#9;</span><span style="color:red;">${canGraduate }</span></p>
			</div>
		</c:otherwise>
	</c:choose>
</body>
</html>