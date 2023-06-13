package com.ossph3.home.check;

import javax.servlet.http.HttpServletRequest;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import com.ossph3.home.CheckMapper;

@Service
public class GradRequDAO {
	@Autowired
	private SqlSession ss;
	
	public void readGradRequ(GradRequDTO grDTO, HttpServletRequest req) {
		GradRequDTO gradrequ = (GradRequDTO) ss.getMapper(CheckMapper.class).readGradRequ(grDTO);

		req.setAttribute("gradrequ", gradrequ);
		
		// GradRequDTO grDTO = new GradRequDTO();
		
		/*
		grDTO aa = "aa";
		
		String major = "ㅁㅁ";
		String major_double = "ㅁㅁ";
		
		int gg_credit = ss.getMapper(CheckMapper.class).getGC(grDTO);
		int hg_count = ss.getMapper(CheckMapper.class).getHC(grDTO);
		int jg_credit = ss.getMapper(CheckMapper.class).getJC(grDTO);
		int jg_GPA = ss.getMapper(CheckMapper.class).getJG(grDTO);
		int bs_credit = ss.getMapper(CheckMapper.class).getBC(grDTO);
		int bs_GPA = ss.getMapper(CheckMapper.class).getBG(grDTO);
		int total_credit = ss.getMapper(CheckMapper.class).getTC(grDTO);
		 */
	}
}