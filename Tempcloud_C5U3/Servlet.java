package com.sres;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
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
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Sample() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		1 insert 2 update 3 delete 4 display
		
		int x=Integer.parseInt(request.getParameter("ch"));
		try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("Driver Class is Loaded");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:4307/empdb","root","");
		if(con!=null) {
			System.out.println("Connection Established");
		if(x==1) {
			
			int eid=Integer.parseInt(request.getParameter("eid"));
			String ename=request.getParameter("ename");
			int esal=Integer.parseInt(request.getParameter("esal"));
			PreparedStatement ps=con.prepareStatement("insert into emp (eid,ename,esal) values (?,?,?)");
			ps.setInt(1, eid);
			ps.setString(2, ename);
			ps.setInt(3, esal);
			int rowaffected=ps.executeUpdate();
			System.out.println("The no if row affected are:"+rowaffected);
		}
		if(x==2) {
//			update
			int eid=Integer.parseInt(request.getParameter("eid"));
			int esal=Integer.parseInt(request.getParameter("esal"));
			PreparedStatement ps=con.prepareStatement("update emp set esal=? where eid=?");
			ps.setInt(1, esal);
			ps.setInt(2, eid);
			int rowaffected=ps.executeUpdate();		
			System.out.println("The no if row affected are:"+rowaffected);
		}
		if(x==3) {
//			delete
			int eid=Integer.parseInt(request.getParameter("eid"));
			PreparedStatement ps=con.prepareStatement("delete from emp where eid=?");
			ps.setInt(1, eid);
			int rowaffected=ps.executeUpdate();
			System.out.println("The no if row affected are:"+rowaffected);
		}
		if(x==4) {
//			display
			PreparedStatement ps=con.prepareStatement("select * from emp");
			ResultSet rs=ps.executeQuery();
			System.out.println("Employee Details are...");
			while(rs.next()) {
				System.out.println("Employee Id:"+rs.getInt(1));
				System.out.println("Employee Name:"+rs.getString(2));
				System.out.println("Employee Salary:"+rs.getInt(3));
			}
		}
		
		}
		else {
			System.out.println("Database Connection Failed");
		}
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}

}
