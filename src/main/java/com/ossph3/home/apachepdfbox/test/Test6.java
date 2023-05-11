package com.ossph3.home.apachepdfbox.test;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Test6 {
    public static void main(String[] args) throws IOException {
        String excelFilePath = "src/sample.xls";
        FileInputStream inputStream = new FileInputStream(new File(excelFilePath));

        Workbook workbook = new HSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);
        List<Course> courses = new ArrayList<>();

        Pattern semesterPattern = Pattern.compile("(\\d{4}-\\d|여름|겨울)\\s\\d\\s(\\S+)");
        Pattern coursePattern = Pattern.compile("([A-Z]{3}\\d{4})\\s(.+?)\\s+(\\d)\\s([A-D][+-]?|F|P)");

        String 이수구분 = null;

        for (int rowNum = 0; rowNum <= sheet.getLastRowNum(); rowNum++) {
            Row row = sheet.getRow(rowNum);
            if (row == null) {
                continue;
            }

            for (int colNum = 0; colNum < row.getLastCellNum(); colNum++) {
                Cell cell = row.getCell(colNum);
                if (cell == null) {
                    continue;
                }

                String cellValue = getCellValueAsString(cell);
                Matcher semesterMatcher = semesterPattern.matcher(cellValue);
                Matcher courseMatcher = coursePattern.matcher(cellValue);

                if (semesterMatcher.find()) {
                    이수구분 = semesterMatcher.group(2);
                } else if (courseMatcher.find()) {
                    String 학수번호 = courseMatcher.group(1);
                    String 과목명 = courseMatcher.group(2).trim();
                    int 학점 = Integer.parseInt(courseMatcher.group(3));
                    String 성적 = courseMatcher.group(4);

                    if (!"F".equals(성적) && 이수구분 != null) {
                        Course course = new Course(이수구분, 학수번호, 과목명, 학점, 성적);
                        courses.add(course);
                    }
                }
            }
        }

        System.out.println(courses);
        workbook.close();
    }

    private static String getCellValueAsString(Cell cell) {
        DataFormatter dataFormatter = new DataFormatter();
        return dataFormatter.formatCellValue(cell);
    }

    static class Course {
        String 이수구분;
        String 학수번호;
        String 과목명;
        int 학점;
        String 성적;

        public Course(String 이수구분, String 학수번호, String 과목명, int 학점, String 성적) {
            this.이수구분 = 이수구분;
            this.학수번호 = 학수번호;
            this.과목명 = 과목명;
            this.학점 = 학점;
            this.성적 = 성적;
        }

        @Override
        public String toString() {
            return "Course{" +
                    "이수구분='" + 이수구분 + '\'' +
                    ", 학수번호='" + 학수번호 + '\'' +
                    ", 과목명='" + 과목명 + '\'' +
                    ", 학점=" + 학점 +
                    ", 성적='" + 성적 + '\'' +
                    '}';
        }
    }
}
