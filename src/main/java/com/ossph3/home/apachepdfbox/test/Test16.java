package com.ossph3.home.apachepdfbox.test;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

public class Test16 {
    public static void main(String[] args) {
        try {
            File pdfFile = new File("src/yh.pdf");
            PDDocument document = Loader.loadPDF(pdfFile);

            PDFTextStripper pdfStripper = new PDFTextStripper();
            String text = pdfStripper.getText(document);

            String educationYear = extractEducationYear(text);
            String college = extractCollege(text);
            String major = extractMajor(text);
            String minor = extractMinor(text);
            String totalExpectedCredit = extractTotalExpectedCredit(text);

            System.out.println("�������� ����⵵: " + educationYear);
            System.out.println("����: " + college);
            System.out.println("�а�: " + major);
            System.out.println("����1: " + minor);
            System.out.println("����濹������: " + totalExpectedCredit);

            List<String> extractedData = extractData(text);
            for (String data : extractedData) {
                System.out.println(data);
            }

            document.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // ����濹�������� �����ϴ� �޼ҵ带 �߰�
    private static String extractTotalExpectedCredit(String text) {
        Pattern pattern = Pattern.compile("����濹������:\\s+(\\d+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return "Not found";
    }

   

    private static String extractEducationYear(String text) {
        Pattern pattern = Pattern.compile("�������� ����⵵:\\s+(\\d{4})");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return "Not found";
    }

    private static String extractCollege(String text) {
        Pattern pattern = Pattern.compile("����\\s*:\\s*([^\\n]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1).split(" ")[0];  // Only get the first part (college name)
        }
        return "Not found";
    }

    private static String extractMajor(String text) {
        Pattern pattern = Pattern.compile("�а�\\s*:\\s*([^\\n]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1).split(" ")[0];  // Only get the first part (major name)
        }
        return "Not found";
    }

    private static String extractMinor(String text) {
        Pattern pattern = Pattern.compile("����1\\s*:\\s*([^\\n]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1).split(" ")[0];  // Only get the first part (minor name)
        }
        return "Not found";
    }

    private static List<String> extractData(String text) {
        List<String> extractedData = new ArrayList<>();
        Map<String, Integer> creditSumMap = new HashMap<>();

        // ���� ǥ������ ����Ͽ� ���� �и�
        String[] lines = text.split("\n");

        // ���� �ִ� �����͸� �����ϱ� ���� ���� ǥ���� ���� ����
        // ���� �ִ� �����͸� �����ϱ� ���� ���� ǥ���� ���� ����
        
        Pattern pattern = Pattern.compile("(\\d{4}[-](?:1|2|����|�ܿ�|����))\\s+(\\d)\\s+((?:�ϱ�|����|�ⱳ|����|�ٽ�|�ڼ�|����[\\s]*1|�б�))\\s+([A-Z0-9\\s<>]+)\\s+(.+?)\\s+(\\d)\\s*(.+)"
);

        for (String line : lines) {
            Matcher matcher = pattern.matcher(line);

            while (matcher.find()) {
                String courseType = matcher.group(3);
                String courseName = matcher.group(5);
                int credit = Integer.parseInt(matcher.group(6));

                extractedData.add(String.format("����: %s �����: %s ����: %d", courseType, courseName, credit));

                // ������ ���� �ջ�
                creditSumMap.put(courseType, creditSumMap.getOrDefault(courseType, 0) + credit);
            }
        }
<<<<<<< HEAD:src/main/java/com/ossph3/home/apachepdfbox/test/Test16.java
        
=======
>>>>>>> 3b931ae131a80e505b869d79f0b30c82554e34d7:src/main/java/com/ossph3/home/apachepoitest/Test16.java

        // ������ ���� �� �� ���
        System.out.println("\n������ ���� �� ��:");
        for (Map.Entry<String, Integer> entry : creditSumMap.entrySet()) {
            System.out.printf("%s - �� ����: %d%n", entry.getKey(), entry.getValue());
        }

        return extractedData;
    }
}
