package com.ossph3.home.apachepdfbox.test;
/*
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

@WebServlet("/upload")
@MultipartConfig
public class FileUploadServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, java.io.IOException {

        response.setContentType("text/html;charset=UTF-8");

        // 파일 업로드하기
        Part filePart = request.getPart("file");
        String fileName = getFileName(filePart);
        String filePath = getServletContext().getRealPath("/uploads") + File.separator + fileName;
        filePart.write(filePath);

        // JSON 파일 생성하기
        String jsonFilePath = getServletContext().getRealPath("/uploads") + File.separator + fileName + ".json";
        convertExcelToJson(filePath, jsonFilePath);

        // 과목 목록 출력하기
        JSONObject jsonObject = parseJson(jsonFilePath);
        JSONArray courseList = (JSONArray) jsonObject.get("Sheet1");
        JSONArray majorCourses = new JSONArray();
        JSONArray generalCourses = new JSONArray();
        JSONArray commonCourses = new JSONArray();
        for (Object courseObj : courseList) {
            JSONObject course = (JSONObject) courseObj;
            String courseName = (String) course.get("과목명");
            String courseType = (String) course.get("이수구분");
            if (courseType.equals("전공필수") || courseType.equals("전공선택")) {
                majorCourses.add(courseName);
            } else if (courseType.equals("일반교양")) {
                generalCourses.add(courseName);
            }
            jsonObject.put("majorCourses", majorCourses);
            jsonObject.put("generalCourses", generalCourses);
            jsonObject.put("commonCourses", commonCourses);

            // 결과 출력하기
            response.getWriter().println("<h2>수강한 과목</h2>");
            response.getWriter().println(jsonObject.toJSONString());

            // 업로드된 파일 삭제하기
            File uploadedFile = new File(filePath);
            if (uploadedFile.exists()) {
                uploadedFile.delete();
            }
            File uploadedJsonFile = new File(jsonFilePath);
            if (uploadedJsonFile.exists()) {
                uploadedJsonFile.delete();
            }
        }

        private String getFileName(final Part part) {
            final String partHeader = part.getHeader("content-disposition");
            for (String content : partHeader.split(";")) {
                if (content.trim().startsWith("filename")) {
                    return content.substring(content.indexOf('=') + 1).trim().replace("\"", "");
                }
            }
            return null;
        }

        private void convertExcelToJson(String excelFilePath, String jsonFilePath) {
            try {
                FileInputStream inputStream = new FileInputStream(new File(excelFilePath));
                Workbook workbook = new XSSFWorkbook(inputStream);

                JSONObject jsonObject = new JSONObject();
                JSONArray jsonArray = new JSONArray();

                Sheet sheet = workbook.getSheetAt(0);
                Iterator<Row> rowIterator = sheet.iterator();
                while (rowIterator.hasNext()) {
                    Row row = rowIterator.next();
                    JSONObject rowObject = new JSONObject();
                    Iterator<Cell> cellIterator = row.cellIterator();
                    while (cellIterator.hasNext()) {
                        Cell cell = cellIterator.next();
                        rowObject.put(cell.getStringCellValue(), cellIterator.next().getStringCellValue());
                    }
                    jsonArray.add(rowObject);
                }
                jsonObject.put(sheet.getSheetName(), jsonArray);

                FileWriter fileWriter = new FileWriter(jsonFilePath);
                fileWriter.write(jsonObject.toJSONString());
                fileWriter.close();

                System.out.println("JSON 파일 생성 완료!");

            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        private JSONObject parseJson(String jsonFilePath) {
            JSONObject jsonObject = new JSONObject();
            try {
                FileInputStream inputStream = new FileInputStream(new File(jsonFilePath));
                byte[] buffer = new byte[inputStream.available()];
                inputStream.read(buffer);
                String jsonText = new String(buffer);
                jsonObject = (JSONObject) JSONValue.parse(jsonText);
                inputStream.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            return jsonObject;
        }
    }
*/