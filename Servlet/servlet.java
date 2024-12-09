package com.sres;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Servlet implementation class Sample
 */
@WebServlet("/Sample")
public class Sample extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public Sample() {
        super();
    }

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        int operationChoice = Integer.parseInt(request.getParameter("ch"));

        try {
            // Load JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Establish connection
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/empdb1", "root", "#prasad7");

            if (con != null) {
                out.println("<h3>Connection Established Successfully</h3>");
                
                if (operationChoice == 1) {
                    // Insert Employee
                    int empId = Integer.parseInt(request.getParameter("id"));
                    String empName = request.getParameter("name");
                    int empSal = Integer.parseInt(request.getParameter("sal"));

                    PreparedStatement ps = con.prepareStatement("INSERT INTO emp (empid, empname, empsal) VALUES (?, ?, ?)");
                    ps.setInt(1, empId);
                    ps.setString(2, empName);
                    ps.setInt(3, empSal);
                    int rowsAffected = ps.executeUpdate();
                    out.println("<p>Inserted " + rowsAffected + " employee(s) successfully.</p>");

                } else if (operationChoice == 2) {
                    // Update Employee Salary
                    int empId = Integer.parseInt(request.getParameter("empid"));
                    int newSal = Integer.parseInt(request.getParameter("empsal"));

                    PreparedStatement ps = con.prepareStatement("UPDATE emp SET empsal = ? WHERE empid = ?");
                    ps.setInt(1, newSal);
                    ps.setInt(2, empId);
                    int rowsAffected = ps.executeUpdate();
                    out.println("<p>Updated " + rowsAffected + " employee(s) successfully.</p>");

                } else if (operationChoice == 3) {
                    // Delete Employee
                    int empId = Integer.parseInt(request.getParameter("empid"));

                    PreparedStatement ps = con.prepareStatement("DELETE FROM emp WHERE empid = ?");
                    ps.setInt(1, empId);
                    int rowsAffected = ps.executeUpdate();
                    out.println("<p>Deleted " + rowsAffected + " employee(s) successfully.</p>");

                } else if (operationChoice == 4) {
                    // View All Employees
                    PreparedStatement ps = con.prepareStatement("SELECT * FROM emp");
                    ResultSet rs = ps.executeQuery();
                    out.println("<h3>Employee Details:</h3>");
                    out.println("<table border='1'><tr><th>ID</th><th>Name</th><th>Salary</th></tr>");
                    while (rs.next()) {
                        out.println("<tr><td>" + rs.getInt("empid") + "</td><td>" + rs.getString("empname") +
                                "</td><td>" + rs.getInt("empsal") + "</td></tr>");
                    }
                    out.println("</table>");
                } else {
                    out.println("<p>Invalid operation selected.</p>");
                }

            } else {
                out.println("<p>Connection failed.</p>");
            }
            con.close();
        } catch (Exception e) {
            out.println("<p>Error: " + e.getMessage() + "</p>");
        }
    }
}
