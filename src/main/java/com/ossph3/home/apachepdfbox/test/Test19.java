package com.ossph3.home.apachepdfbox.test;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

public class Test19 {
    public static void main(String[] args) {
        try {
        	File pdfFile = new File("src/main/webapp/resources/test/sample_yh.pdf");
        	/*
        	File pdfFile = new File("src/main/webapp/resources/test/sample_eh.pdf");
        	File pdfFile = new File("src/main/webapp/resources/test/sample_hg.pdf");
        	*/
        	PDDocument document = PDDocument.load(pdfFile);

            PDFTextStripper pdfStripper = new PDFTextStripper();
            String text = pdfStripper.getText(document);
            

            String educationYear = extractEducationYear(text);
            String college = extractCollege(text);
            String major = extractMajor(text);
            String minor = extractMinor(text);
            String totalExpectedCredit = extractTotalExpectedCredit(text);

            System.out.println("교육과정 적용년도: " + educationYear);
            System.out.println("대학: " + college);
            System.out.println("학과: " + major);
            System.out.println("복수1: " + minor);
            System.out.println("총취득예정학점: " + totalExpectedCredit);

            Map<String, String[]> totalCreditsAndGPAs = extractTotalCreditsAndGPAs(text);
            for (String key : totalCreditsAndGPAs.keySet()) {
                String[] values = totalCreditsAndGPAs.get(key);
                System.out.println(key + " 총학점: " + values[0] + ", 평점: " + values[1]);
            }

            Map<String, String> englishCourseStatus = extractEnglishCourseStatus(text);
            for (String key : englishCourseStatus.keySet()) {
                System.out.println(key + " 상태: " + englishCourseStatus.get(key));
            }

            List<String> extractedData = extractData(text);
            for (String data : extractedData) {
                System.out.println(data);
            }
            extractAndPrintMajorGrades(text);
            extractAndPrintMinorGrades(text);
            document.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private static void extractAndPrintMinorGrades(String text) {
        Pattern pattern = Pattern.compile("복수1평점:\\s*([0-9.]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            System.out.println("복수1평점: " + matcher.group(1));
        } else {
            System.out.println("복수1평점 정보를 찾을 수 없습니다.");
        }
    }
    private static void extractAndPrintMajorGrades(String text) {
        Pattern pattern = Pattern.compile("제1전공평점:\\s*([0-9.]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            System.out.println("제1전공평점: " + matcher.group(1));
        } else {
            System.out.println("제1전공평점 정보를 찾을 수 없습니다.");
        }
    }


    // 총취득예정학점을 추출하는 메소드를 추가
    private static String extractTotalExpectedCredit(String text) {
        Pattern pattern = Pattern.compile("총취득예정학점:\\s+(\\d+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return "Not found";
    }

    private static Map<String, String[]> extractTotalCreditsAndGPAs(String text) {
        Map<String, String[]> result = new HashMap<String, String[]>();
        Pattern pattern = Pattern.compile("(제1전공|복수\\d): 총(\\d+)학점 \\(기초:(\\d+), 전문:(\\d+)\\) (제1전공|복수\\d)평점: ([\\d\\.]+)");
        Matcher matcher = pattern.matcher(text);
        while (matcher.find()) {
            String[] values = {matcher.group(2), matcher.group(6)};
            result.put(matcher.group(1), values);
        }
        return result;
    }
    
    private static Map<String, String> extractEnglishCourseStatus(String text) {
        Map<String, String> result = new HashMap<String, String>();
        Pattern pattern = Pattern.compile("(영어강의이수|영어패스제\\(토익 등\\)): (대상|비대상) , (PASS|FAIL)");
        Matcher matcher = pattern.matcher(text);
        while (matcher.find()) {
            result.put(matcher.group(1), matcher.group(3));
        }
        return result;
    }

    private static String extractEducationYear(String text) {
        Pattern pattern = Pattern.compile("교육과정 적용년도:\\s+(\\d{4})");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return "Not found";
    }

    private static String extractCollege(String text) {
        Pattern pattern = Pattern.compile("대학\\s*:\\s*([^\\n]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1).split(" ")[0];  // Only get the first part (college name)
        }
        return "Not found";
    }

    private static String extractMajor(String text) {
        Pattern pattern = Pattern.compile("학과\\s*:\\s*([^\\n]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1).split(" ")[0];  // Only get the first part (major name)
        }
        return "Not found";
    }

    private static String extractMinor(String text) {
        Pattern pattern = Pattern.compile("복수1\\s*:\\s*([^\\n]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1).split(" ")[0];  // Only get the first part (minor name)
        }
        return "Not found";
    }

    private static List<String> extractData(String text) {
        List<String> extractedData = new ArrayList<String>();
        Map<String, Integer> creditSumMap = new HashMap<String, Integer>();

        // 정규 표현식을 사용하여 행을 분리
        String[] lines = text.split("\n");

        // 관심 있는 데이터를 추출하기 위한 정규 표현식 패턴 정의
        Pattern pattern = Pattern.compile("(\\d{4}[-](?:1|2|여름|겨울|공통))\\s+(\\d)\\s+((?:일교|전공|기교|공교|핵심|자선|복수[\\s]*1|학기))\\s+([A-Z0-9\\s<>]+)\\s+(.+?)\\s+(\\d)\\s*(.+)");
        
        for (String line : lines) {
            Matcher matcher = pattern.matcher(line);

            while (matcher.find()) {
                String courseType = matcher.group(3);
                String courseCode = matcher.group(4);
                String courseName = matcher.group(5);
                int credit = Integer.parseInt(matcher.group(6));

                extractedData.add(String.format("영역: %s 과목명: %s 학수번호: %s 학점: %d", courseType, courseName, courseCode, credit));

                // 영역별 학점 합산
                creditSumMap.put(courseType, creditSumMap.getOrDefault(courseType, 0) + credit);
            }
        }

        // 영역별 학점 총 합 출력
        System.out.println("\n영역별 학점 총 합:");
        for (Map.Entry<String, Integer> entry : creditSumMap.entrySet()) {
            System.out.printf("%s - 총 학점: %d%n", entry.getKey(), entry.getValue());
        }

        return extractedData;
    }

}