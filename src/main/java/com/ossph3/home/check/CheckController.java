package com.ossph3.home.check;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
    private GradRequDAO grDAO;

    @RequestMapping(value = "/check.do", method = RequestMethod.POST)
    public String checkDo(@RequestParam("file") MultipartFile file, HttpServletRequest req, Model model) {
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
                String text = pdfTextStripper.getText(document);
                
                /*
                int educationYear = Integer.parseInt(extractEducationYear(text));
                String college = extractCollege(text);
                String major = extractMajor(text);
                String minor = extractMinor(text);
                String totalExpectedCredit = extractTotalExpectedCredit(text);
                
                model.addAttribute("educationYear", educationYear);
                model.addAttribute("totalExpectedCredit", totalExpectedCredit);
                
                System.out.println("교육과정 적용년도: " + educationYear);
                System.out.println("대학: " + college);
                System.out.println("학과: " + major);
                System.out.println("복수1: " + minor);
                System.out.println("총취득예정학점: " + totalExpectedCredit);
                */

                /*
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
                */
                
                String pdf_educationyear = extract_educationyear(text);
                String pdf_major = extract_major(text);
                //
                String pdf_gg_credit = extract_gg(text);
                int pdf_hg_count = Integer.parseInt("0");
                //
                String pdf_jg_credit = extract_jg(text);
                String pdf_jg_GPA = extract_jg_gpa(text);
                // int pdf_jg_GPA = Integer.parseInt(extract_jg_gpa(text));
                String pdf_bs_credit = extract_bs(text);
                String pdf_bs_GPA = extract_bs_gpa(text);
                // int pdf_bs_GPA = Integer.parseInt(extract_bs_gpa(text));
                //
                String pdf_english_course = extract_english_course(text);
				String pdf_english_pass = extract_english_pass(text);
                String pdf_total_credit = extract_total_credit(text);
                // int pdf_total_credit = Integer.parseInt(extract_total_credit(text));
                
                document.close();
                
                
                
                System.out.println("확인1: " + pdf_educationyear);
                System.out.println("확인2: " + pdf_major);
                //
                System.out.println("확인3: " + pdf_gg_credit);
                System.out.println("확인4: " + pdf_hg_count);
                //
                System.out.println("확인5: " + pdf_jg_credit);
                System.out.println("확인6: " + pdf_jg_GPA);
                System.out.println("확인7: " + pdf_bs_credit);
                System.out.println("확인8: " + pdf_bs_GPA);
                //
                System.out.println("확인9-1: " + pdf_english_course);
				System.out.println("확인9-2: " + pdf_english_pass);
				System.out.println("확인9-3: " + pdf_total_credit);
                
				
				// grDAO.readGradRequ(grDTO, req);
				model.addAttribute("gg_credit", 29);
				// model.addAttribute("hg_credit", 0);
				//
				model.addAttribute("jg_credit", 36);
				model.addAttribute("jg_GPA", 2.0);
				model.addAttribute("bs_credit", 36);
				model.addAttribute("bs_GPA", 2.0);
				//
				model.addAttribute("total_credit", 130);
				
				
				
				
				
				// model.addAttribute("pdf_educationyear", pdf_educationyear);
				// model.addAttribute("pdf_major", pdf_major);
				//
				model.addAttribute("pdf_gg_credit", pdf_gg_credit);
				// model.addAttribute("pdf_hg_count", pdf_hg_credit);
				//
				model.addAttribute("pdf_jg_credit", pdf_jg_credit);
				if (Double.parseDouble(pdf_jg_GPA) > 2) {
					model.addAttribute("pdf_jg_GPA", "2.0이상");
				} else {
					model.addAttribute("pdf_jg_GPA", "2.0미만");
				}
				model.addAttribute("pdf_bs_credit", pdf_bs_credit);
				if (Double.parseDouble(pdf_bs_GPA) > 2) {
					model.addAttribute("pdf_bs_GPA", "2.0이상");
				} else {
					model.addAttribute("pdf_bs_GPA", "2.0미만");
				}
				//
				model.addAttribute("pdf_english_course", pdf_english_course);
				model.addAttribute("pdf_english_pass", pdf_english_pass);
				model.addAttribute("pdf_total_credit", pdf_total_credit);

				
				int cancan = 0;		
        		if (pdf_educationyear.equals("2010")) {
        			model.addAttribute("pdf_gg_credit", 34);
        			model.addAttribute("pdf_hg_count", 2);
        			model.addAttribute("hg_count", 2);
        			model.addAttribute("pdf_bs_credit", "30+6");
        			model.addAttribute("pdf_total_credit", "127+6");
        			cancan = 1;		
        		} else if (pdf_educationyear.equals("2016")) {
        			model.addAttribute("pdf_hg_count", 2);
        			model.addAttribute("hg_count", 2);
        			model.addAttribute("pdf_bs_credit", "21+15");
        			model.addAttribute("pdf_total_credit", "113+21");
        			cancan = 1;		
            	} else if (pdf_educationyear.equals("2018")) {
            		model.addAttribute("pdf_gg_credit", "31");
            		model.addAttribute("pdf_hg_count", 4);
            		model.addAttribute("hg_count", 4);
            		model.addAttribute("pdf_jg_credit", "36");
            		model.addAttribute("pdf_bs_credit", "30+6");
            		model.addAttribute("pdf_total_credit", "110+12");
            		cancan = 0;			
        		}
        		
        		if (cancan == 1) {
        			model.addAttribute("canGraduate", "가능");			        			
        		} else if (cancan == 0) {
        			model.addAttribute("canGraduate", "불가능");			        			
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
    
    // 연도
    private static String extract_educationyear(String text) {
        Pattern pattern = Pattern.compile("교육과정 적용년도:\\s+(\\d{4})");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return "Not found";
    }
    
    // 전공
    private static String extract_major(String text) {
        Pattern pattern = Pattern.compile("학과\\s*:\\s*([^\\n]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1).split(" ")[0];  // Only get the first part (major name)
        }
        return "Not found";
    }
    
    // 공교학점
    private static String extract_gg(String text) {
        Pattern pattern = Pattern.compile("공통교양:\\s*총([0-9]+)학점");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        } else {
            return "Not found";
        }
    }
    
    // 학기개수
    
    // 전공학점
    private static String extract_jg(String text) {
        Pattern pattern = Pattern.compile("제1전공:\\s*총([0-9]+)학점");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        } else {
            return "Not found";
        }
    }
    
    // 전공평점
    private static String extract_jg_gpa(String text) {
        Pattern pattern = Pattern.compile("제1전공평점:\\s*([0-9.]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        } else {
        	return "Not found";
        }
    }
    
    // 복수학점
    private static String extract_bs(String text) {
        Pattern pattern = Pattern.compile("복수1:\\s*총([0-9.]+)학점");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        } else {
        	return "Not found";
        }
    }
    
    // 복수평점
    private static String extract_bs_gpa(String text) {
        Pattern pattern = Pattern.compile("복수1평점:\\s*([0-9.]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        } else {
        	return "Not found";
        }
    }
    
    // 영어강의이수
 	private static String extract_english_course(String text) {
 		// private static Map<String, String> extract_englishcourse(String text) {
 		// Map<String, String> result = new HashMap<String, String>();
 		Pattern pattern = Pattern.compile("(영어강의이수): (대상|비대상) , (PASS|FAIL)");
 		Matcher matcher = pattern.matcher(text);
 		/*
 		 * while (matcher.find()) { result.put(matcher.group(1), matcher.group(3)); }
 		 * return result;
 		 */
 		if (matcher.find()) {
 			return matcher.group(3);
 		} else {
 			return "Not found";
 		}
 	}

 	// 영어패스제
 	private static String extract_english_pass(String text) {
 		// private static Map<String, String> extract_englishpass(String text) {
 		// Map<String, String> result = new HashMap<String, String>();
 		Pattern pattern = Pattern.compile("(영어패스제\\(토익 등\\)): (대상|비대상) , (PASS|FAIL)");
 		Matcher matcher = pattern.matcher(text);
 		/*
 		 * while (matcher.find()) { result.put(matcher.group(1), matcher.group(3)); }
 		 * return result;
 		 */
 		if (matcher.find()) {
 			return matcher.group(3);
 		} else {
 			return "Not found";
 		}
 	}
    
    // 총취득예정학점
    private static String extract_total_credit(String text) {
        Pattern pattern = Pattern.compile("총취득예정학점:\\s+(\\d+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return "Not found";
    }
    
    
    
    


    // 총취득예정학점을 추출하는 메소드를 추가
    
    /*
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
    */
    
    private static Map<String, String> extractEnglishCourseStatus(String text) {
        Map<String, String> result = new HashMap<String, String>();
        Pattern pattern = Pattern.compile("(영어강의이수|영어패스제\\(토익 등\\)): (대상|비대상) , (PASS|FAIL)");
        Matcher matcher = pattern.matcher(text);
        while (matcher.find()) {
            result.put(matcher.group(1), matcher.group(3));
        }
        return result;
    }

    

    private static String extractCollege(String text) {
        Pattern pattern = Pattern.compile("대학\\s*:\\s*([^\\n]+)");
        Matcher matcher = pattern.matcher(text);
        if (matcher.find()) {
            return matcher.group(1).split(" ")[0];  // Only get the first part (college name)
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
    
    /*
    public String checkDo(@RequestParam("file") MultipartFile file, Model model) {
        try {
            String text = readPdf(file); // PDF 내용 읽기
            GraduationCheckResult result = gc.check(text); // 졸업 가능 여부 확인
            
            // 결과를 모델에 추가
            model.addAttribute("levelTest", result.getLevelTest());
            model.addAttribute("totalCredits", result.getTotalCredits());
            model.addAttribute("canGraduate", result.isCanGraduate());
            // 추가적으로 필요한 정보들을 모델에 추가...
            
            return "aftercheck"; // aftercheck.jsp로 이동
        } catch (Exception e) {
            model.addAttribute("errormessage", e.getMessage());
            return "error"; // 오류 페이지로 이동
        }
    }
     */
    
    /*
    private String readPdf(MultipartFile file) throws IOException {
        // PDF 파일 읽는 로직...
    	try {
        	File pdfFile = new File("src/main/webapp/resources/test/sample_yh.pdf");
        	// File pdfFile = new File("src/main/webapp/resources/test/sample_eh.pdf");
        	// File pdfFile = new File("src/main/webapp/resources/test/sample_hg.pdf");
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
    */
}