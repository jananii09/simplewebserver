# EX01 Developing a Simple Webserver
## Date: 20.11.2024

## AIM:
To develop a simple webserver to serve html pages and display the configuration details of laptop.

## DESIGN STEPS:
### Step 1: 
HTML content creation.

### Step 2:
Design of webserver workflow.

### Step 3:
Implementation using Python code.

### Step 4:
Serving the HTML pages.

### Step 5:
Testing the webserver.

## PROGRAM:
```
from http.server import HTTPServer,BaseHTTPRequestHandler

<!DOCTYPE html>
<html>
<head>
<body>
    <h2>basic html table</h2>
    <table border="1" width="100" bgcolor="pink">
        <tr>
            <th>system configuration</th>
            <th>Description</th>
        </tr>
        <tr>
            <th>process</th>
            <th> 17 </th>
        </tr>
        <tr>
            <th>primary memory</th>
            <th> Ram 16 GB </th>
        </tr>
        <tr>
            <th>secondary memory</th>
            <th> 512 GB </th>
        </tr>
        <tr>
            <th>o.s</th>
            <th>Windows 11</th>
        </tr>
        <tr>    
            <th> Graphic</th>
            <th> nvidia</th>
        </tr>
        </table>
       </center> 
       </body>


```

##OUTPUT:

![Screenshot 2024-12-12 223321](https://github.com/user-attachments/assets/c8669d17-5c33-4dd6-ae3b-1e95ffdd4ffd)



## RESULT:
The program for implementing simple webserver is executed successfully.
