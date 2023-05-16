package com.ossph3.home.check;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

@Service
public class CheckDAO {
	public boolean check(String pdfText, HttpServletRequest req) {
		
		req.setAttribute("levelTest", "S0");
		req.setAttribute("totalCredits", "120");
		return true;
	}
}