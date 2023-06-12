package com.ossph3.home.check;

public class GradRequDTO {
	private int gg;
	private int hg;
	private int jg;
	private int jgGPA;
	private int bs;
	private int bsGPA;
	private int totalCredits;
	public GradRequDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public GradRequDTO(int gg, int hg, int jg, int jgGPA, int bs, int bsGPA, int totalCredits) {
		super();
		this.gg = gg;
		this.hg = hg;
		this.jg = jg;
		this.jgGPA = jgGPA;
		this.bs = bs;
		this.bsGPA = bsGPA;
		this.totalCredits = totalCredits;
	}
	public int getGg() {
		return gg;
	}
	public void setGg(int gg) {
		this.gg = gg;
	}
	public int getHg() {
		return hg;
	}
	public void setHg(int hg) {
		this.hg = hg;
	}
	public int getJg() {
		return jg;
	}
	public void setJg(int jg) {
		this.jg = jg;
	}
	public int getJgGPA() {
		return jgGPA;
	}
	public void setJgGPA(int jgGPA) {
		this.jgGPA = jgGPA;
	}
	public int getBs() {
		return bs;
	}
	public void setBs(int bs) {
		this.bs = bs;
	}
	public int getBsGPA() {
		return bsGPA;
	}
	public void setBsGPA(int bsGPA) {
		this.bsGPA = bsGPA;
	}
	public int getTotalCredits() {
		return totalCredits;
	}
	public void setTotalCredits(int totalCredits) {
		this.totalCredits = totalCredits;
	}
}
