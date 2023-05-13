package com.ossph3.home.check;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class CheckController {
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public String handleFileUpload(@RequestParam("file") MultipartFile file) {
		if (!file.isEmpty()) {
			try {
				PDDocument document = PDDocument.load(file.getInputStream());
				PDFTextStripper pdfTextStripper = new PDFTextStripper();
				String pdfText = pdfTextStripper.getText(document);
				document.close();
				
				// PDF 내용 처리
				
			} catch (Exception e) {
				e.printStackTrace();
				return "You failed to upload " + e.getMessage();
			}
		} else {
			return "You failed to upload because the file was empty.";
		}
	}
}

/*
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.web.multipart.MultipartFile;

@RequestMapping(value = "/uploadPdf", method = RequestMethod.POST)
public String handleFileUpload(@RequestParam("file") MultipartFile file) {
    if (!file.isEmpty()) {
        try {
            PDDocument document = PDDocument.load(file.getInputStream());
            PDFTextStripper pdfTextStripper = new PDFTextStripper();
            String pdfText = pdfTextStripper.getText(document);
            document.close();

            // PDF 내용 처리

        } catch (Exception e) {
            e.printStackTrace();
            return "You failed to upload " + e.getMessage();
        }
    } else {
        return "You failed to upload because the file was empty.";
    }
}
*/