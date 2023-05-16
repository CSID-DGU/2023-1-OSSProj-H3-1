package com.ossph3.home.check;

import javax.servlet.http.HttpServletRequest;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class CheckController {
    @Autowired
    private CheckDAO cDAO;

    @RequestMapping(value = "/check.do", method = RequestMethod.POST)
    public String checkDo(@RequestParam("file") MultipartFile file, HttpServletRequest req) {
        if (!file.isEmpty()) {
            try {
                // Check if the uploaded file is a PDF
                if (!file.getContentType().equals("application/pdf")) {
                    req.setAttribute("errormessage", "Invalid file type. Please upload a PDF file.");
                    return "errorPage";
                }

                // Upload PDF
                PDDocument document = PDDocument.load(file.getInputStream());
                PDFTextStripper pdfTextStripper = new PDFTextStripper();
                String pdfText = pdfTextStripper.getText(document);
                System.out.println(pdfText);
                document.close();

                // Graduation check
                boolean canGraduate = cDAO.check(pdfText, req);
                if (!canGraduate) {
                    req.setAttribute("errormessage", "You cannot graduate yet according to your uploaded document.");
                    return "errorPage";
                }
            } catch (Exception e) {
                e.printStackTrace();
                req.setAttribute("errormessage", "Error occurred while processing your document: " + e.getMessage());
                return "errorPage";
            }
        } else {
            req.setAttribute("errormessage", "You failed to upload because the file was empty.");
            return "errorPage";
        }

        req.setAttribute("contents", "check/afterCheck.jsp");
        return "index";
    }
}