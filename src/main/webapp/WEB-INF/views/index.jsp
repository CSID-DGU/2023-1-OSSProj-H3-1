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
	<div class="index_shadow">
	</div>
	<div class="index_container">
		<header>
			<div class="index_homeLogo">
				<div>
					<a href="/home">졸업어때</a>
				</div>
			</div>
			<div class="index_navigationbar">
				<div>
					<a href="notice.go">공지사항</a>
				</div>
				<div>
					<a href="guide.go">커리큘럼가이드</a>
				</div>
				<div>
					<a href="check.go">졸업요건확인</a>
				</div>
				<div>
					<a href="share.go">정보공유</a>
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
			<div class="index_footer">
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