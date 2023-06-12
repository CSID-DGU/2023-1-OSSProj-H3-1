package com.ossph3.home;

import com.ossph3.home.check.GradRequDTO;

public interface CheckMapper {
	int getGg(GradRequDTO grDTO);

	int getHg(GradRequDTO grDTO);

	int getJg(GradRequDTO grDTO);

	int getJgGPA(GradRequDTO grDTO);

	int getBs(GradRequDTO grDTO);

	int getBsGPA(GradRequDTO grDTO);

	int getTotalCredits(GradRequDTO grDTO);
}
