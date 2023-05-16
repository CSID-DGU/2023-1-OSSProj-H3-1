package com.ossph3.home.check;

public class CheckDTO {
	private String category;
    private String code;
    private String title;
    private int credit;
    private String grade;
    private String area;
	public CheckDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CheckDTO(String category, String code, String title, int credit, String grade, String area) {
		super();
		this.category = category;
		this.code = code;
		this.title = title;
		this.credit = credit;
		this.grade = grade;
		this.area = area;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getCredit() {
		return credit;
	}
	public void setCredit(int credit) {
		this.credit = credit;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
}
