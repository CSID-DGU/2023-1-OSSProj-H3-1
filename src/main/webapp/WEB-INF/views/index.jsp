<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>졸업어때</title>
<!-- CSS -->
<link rel="stylesheet" href="resources/css/index.css" />
</head>
<body>
	<div id="index_shadow">
	</div>
	<div id="index_container">
		<header>
			<div id="index_homeLogo">
				<div>
					<a href="/home"><img src="resources/image/졸업어때_donggukStrongOrange.png"></a>
				</div>
			</div>
			<div id="index_navigationbar">
				<div>
					<a href="guide.go" target="_self">커리큘럼가이드</a>
				</div>
				<div>
					<a href="check.go" target="_self">모의졸업사정</a>
				</div>
				<div>
					<a href="board.go" target="_self">정보공유게시판</a>
				</div>
			</div>
		</header>
		<main>
			<jsp:include page="${contents}"></jsp:include>
		</main>
		<!-- 
		<div>
			피드백 챗봇
		</div>
		 -->
		<footer>
			<div id="index_footer">
				<div>
					<a href="https://www.dongguk.edu/page/137" target="_blank">동국대학교 학업이수가이드</a>
					<a href="https://mdrims.dongguk.edu/" target="_blank">동국대학교 MDRIMS</a>
				</div>
				<div>
					<a href="https://github.com/CSID-DGU/2023-1-OSSProj-H3-1" target="_blank">About Us</a>
				</div>
			</div>
		</footer>
	</div>
	<!-- JavaScript -->
	<script src="resources/js/index.js"></script>
</body>
</html>