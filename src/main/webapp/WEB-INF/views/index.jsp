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
	<div class="index_shadow"></div>
	<div class="index_container">
		<header>
			<div>
				<a href="/home">졸업어때</a>
			</div>
			<div>
				<div>
					<a href="notice.go">공지사항</a>
				</div>
				<div>
					<a href="roadmap.go">로드맵</a>
				</div>
				<div>
					<a href="tutorial.go">튜토리얼</a>
				</div>
				<div>
					<a href="feedback.go">피드백</a>
				</div>
			</div>
		</header>
		<main>
			<jsp:include page="${contents}"></jsp:include>
		</main>
		<footer>
			<div class="index_footer">
				<div>
					동국대학교홈페이지?유드림스?
				</div>
				<div>
					팀소개(깃허브?노션?)
				</div>
			</div>
		</footer>
	</div>
	<!-- JavaScript -->
	<script src="resources/js/index.js"></script>
</body>
</html>