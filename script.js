import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if("admin".equals(username) && "password".equals(password)) {
            response.getWriter().write("Login Successful!");
        } else {
            response.getWriter().write("Invalid credentials!");
        }
    }
}
