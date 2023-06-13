package com.ossph3.home.check;

public class GradRequDTO {
	private int educationyear;
	private String major;
	private String major_double;
	private int gg_credit;
	private int hg_count;
	private int jg_credit;
	private int jg_GPA;
	private int bs_credit;
	private int bs_GPA;
	private int total_credit;
	public GradRequDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public GradRequDTO(int educationyear, String major, String major_double, int gg_credit, int hg_count, int jg_credit,
			int jg_GPA, int bs_credit, int bs_GPA, int total_credit) {
		super();
		this.educationyear = educationyear;
		this.major = major;
		this.major_double = major_double;
		this.gg_credit = gg_credit;
		this.hg_count = hg_count;
		this.jg_credit = jg_credit;
		this.jg_GPA = jg_GPA;
		this.bs_credit = bs_credit;
		this.bs_GPA = bs_GPA;
		this.total_credit = total_credit;
	}
	public int getEducationyear() {
		return educationyear;
	}
	public void setEducationyear(int educationyear) {
		this.educationyear = educationyear;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getMajor_double() {
		return major_double;
	}
	public void setMajor_double(String major_double) {
		this.major_double = major_double;
	}
	public int getGg_credit() {
		return gg_credit;
	}
	public void setGg_credit(int gg_credit) {
		this.gg_credit = gg_credit;
	}
	public int getHg_count() {
		return hg_count;
	}
	public void setHg_count(int hg_count) {
		this.hg_count = hg_count;
	}
	public int getJg_credit() {
		return jg_credit;
	}
	public void setJg_credit(int jg_credit) {
		this.jg_credit = jg_credit;
	}
	public int getJg_GPA() {
		return jg_GPA;
	}
	public void setJg_GPA(int jg_GPA) {
		this.jg_GPA = jg_GPA;
	}
	public int getBs_credit() {
		return bs_credit;
	}
	public void setBs_credit(int bs_credit) {
		this.bs_credit = bs_credit;
	}
	public int getBs_GPA() {
		return bs_GPA;
	}
	public void setBs_GPA(int bs_GPA) {
		this.bs_GPA = bs_GPA;
	}
	public int getTotal_credit() {
		return total_credit;
	}
	public void setTotal_credit(int total_credit) {
		this.total_credit = total_credit;
	}
}
