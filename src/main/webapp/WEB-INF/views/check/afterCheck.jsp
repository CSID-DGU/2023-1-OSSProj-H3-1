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
			<div>
				<h1>모의 졸업 사정 결과</h1>
			    <p>레벨테스트: ${levelTest}</p>
			    <p>총 학점: ${totalCredits}</p>
			    <p>졸업 가능 여부: ${canGraduate ? '가능' : '불가능'}</p>
			</div>
		</c:otherwise>
	</c:choose>
</body>
</html>