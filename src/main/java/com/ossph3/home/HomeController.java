package com.ossph3.home;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpServletRequest req) {
		req.setAttribute("contents", "home/home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/notice.go", method = RequestMethod.GET)
	public String noticeGo(HttpServletRequest req) {
		req.setAttribute("contents", "notice/notice.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/roadmap.go", method = RequestMethod.GET)
	public String roadmapGo(HttpServletRequest req) {
		req.setAttribute("contents", "roadmap/roadmap.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/tutorial.go", method = RequestMethod.GET)
	public String tutorialGo(HttpServletRequest req) {
		req.setAttribute("contents", "tutorial/tutorial.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/feedback.go", method = RequestMethod.GET)
	public String feedbackGo(HttpServletRequest req) {
		req.setAttribute("contents", "feedback/feedback.jsp");
		return "index";
	}
}
