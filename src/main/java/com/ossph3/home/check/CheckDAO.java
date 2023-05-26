package com.ossph3.home.check;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

@Service
public class CheckDAO {
	public boolean check(String pdfText, HttpServletRequest req) {
		req.setAttribute("levelTest", "S0");
		/**/		
		req.setAttribute("gg", "122");
		req.setAttribute("hg", "122");
		req.setAttribute("jg", "122");
		req.setAttribute("bs", "122");
		req.setAttribute("totalCredits", "122");
		req.setAttribute("canGraduate", "불가능");
		return true;
	}
}