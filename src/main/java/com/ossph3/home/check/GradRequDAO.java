package com.ossph3.home.check;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.ossph3.home.CheckMapper;
import com.tireshoppingmall.home.board.BoardMapper;

@Service
public class GradRequDAO {
	@Autowired
	private SqlSession ss;
	
	public GradRequDTO read(String text, HttpServletRequest req, Model model) {
		GradRequDTO grDTO = new GradRequDTO();
		
		String major = "ㅁㅁ";
		
		int gg = ss.getMapper(CheckMapper.class).getGg(grDTO);
		int hg = ss.getMapper(CheckMapper.class).getHg(grDTO);
		int jg = ss.getMapper(CheckMapper.class).getJg(grDTO);
		int jgGPA = ss.getMapper(CheckMapper.class).getJgGPA(grDTO);
		int bs = ss.getMapper(CheckMapper.class).getBs(grDTO);
		int bsGPA = ss.getMapper(CheckMapper.class).getBsGPA(grDTO);
		int totalCredits = ss.getMapper(CheckMapper.class).getTotalCredits(grDTO);
		
		return grDTO;
	}
}