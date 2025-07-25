const userList = [];

function requestHandler(req, resp) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<header><title>user list app</title></header>");
    resp.write("<body>");
    resp.write("<h1>Please enter a user name</h1>");
    resp.write(
      "<form action='/createUser' method='POST'> <input type='text' name='username' /><button type='submit'>Submit</button></form>"
    );
    resp.write("</body>");
    resp.write("</html>");
    resp.end();
  }

  if (url === "/createUser" && method === "POST") {
    console.log("createUser is here");
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("close", () => {
      console.log(body);
      const user = Buffer.concat(body).toString();
      console.log(user);
      const username = user.split("=")[1];
      userList.push(username);

      resp.statusCode = 302;
      resp.setHeader("Location", "/users");
      return resp.end();
    });
  }

  if (url === "/users") {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<header><title>user list app</title></header>");
    resp.write("<body>");
    resp.write("<h1>User List</h1>");
    resp.write("<ul>");
    for (const el of userList) {
      resp.write("<li>" + el + "</li>");
    }
    resp.write("</ul>");
    resp.write("</body>");
    resp.write("</html>");
    resp.end();
  }
}

module.exports = requestHandler;
