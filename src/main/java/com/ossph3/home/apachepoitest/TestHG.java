package com.ossph3.home.apachepoitest;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

public class TestHG {
	 public static void main(String[] args) throws IOException {
	        // PDF 파일 로드
	        File file = new File("src/main/webapp/resources/test/sample_hg.pdf");
	        FileInputStream inputStream = new FileInputStream(file);
	        PDDocument document = PDDocument.load(inputStream);

	        // PDF 파일에서 텍스트 추출
	        PDFTextStripper stripper = new PDFTextStripper();
	        String text = stripper.getText(document);
	        System.out.println(text);

	        // PDDocument 닫기
	        document.close();
	    }
}
