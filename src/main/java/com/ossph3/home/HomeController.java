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
	
	@RequestMapping(value = "/guide.go", method = RequestMethod.GET)
	public String guideGo(HttpServletRequest req) {
		req.setAttribute("contents", "guide/guide.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/check.go", method = RequestMethod.GET)
	public String checkGo(HttpServletRequest req) {
		req.setAttribute("contents", "check/check.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/share.go", method = RequestMethod.GET)
	public String shareGo(HttpServletRequest req) {
		req.setAttribute("contents", "share/share.jsp");
		return "index";
	}
}
