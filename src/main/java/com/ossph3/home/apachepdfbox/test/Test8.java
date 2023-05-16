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

public class Test8 {
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
            
            /*
            */

            List<String> extractedData = extractData(text);
            for (String data : extractedData) {
                System.out.println(data);
            }

            document.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static List<String> extractData(String text) {
        List<String> extractedData = new ArrayList<String>();
        Map<String, Integer> creditSumMap = new HashMap<String,Integer>();

        // 정규 표현식을 사용하여 행을 분리
        String[] lines = text.split("\n");

        // 관심 있는 데이터를 추출하기 위한 정규 표현식 패턴 정의
        Pattern pattern = Pattern.compile("(\\d{4}[-](?:1|2|여름|겨울|공통))\\s+(\\d)\\s+((?:일교|전공|기교|공교|핵심|자선|복수[\\s]*1))\\s+([A-Z0-9\\s<>]+)\\s+(.+?)\\s+(\\d)\\s+([A-Z+0]+)\\s+(.+)");

        for (String line : lines) {
            Matcher matcher = pattern.matcher(line);

            while (matcher.find()) {
                String courseType = matcher.group(3);
                String courseName = matcher.group(5);
                int credit = Integer.parseInt(matcher.group(6));

                extractedData.add(String.format("영역: %s 과목명: %s 학점: %d", courseType, courseName, credit));

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


