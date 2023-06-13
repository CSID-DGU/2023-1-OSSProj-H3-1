package com.ossph3.home;

import com.ossph3.home.check.GradRequDTO;

public interface CheckMapper {
	GradRequDTO readGradRequ(GradRequDTO grDTO);
	
	/*
	int getGC(GradRequDTO grDTO);

	int getHC(GradRequDTO grDTO);

	int getJC(GradRequDTO grDTO);

	int getJG(GradRequDTO grDTO);

	int getBC(GradRequDTO grDTO);

	int getBG(GradRequDTO grDTO);

	int getTC(GradRequDTO grDTO);
	*/
}
