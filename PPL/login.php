<?php
session_start();
require_once('./lib/db_login.php');

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$valid = $error_nama = $error_password = '';

if (isset($_POST['login'])) {
    $valid = TRUE;

    $nama = test_input($_POST['nama']);
    if ($nama == '') {
        $error_nama = 'Username harus diisi';
        $valid = FALSE;
    }

    $password = test_input($_POST['password']);
    if ($password == '') {
        $error_password = 'Password harus diisi';
        $valid = FALSE;
    }

    if ($valid) {
        $db = new mysqli("nama_host", "nama_user", "password", "nama_database");
        if ($db->connect_error) {
            die("Koneksi database gagal: " . $db->connect_error);
        }

        $query = "SELECT * FROM users WHERE nama='".$nama."' AND Password='".md5($password)."' ";
        $result = $db->query($query);
        if (!$result) {
            die("Couldn't query the database: <br/>" . $db->error);
        } else {
            if ($result->num_rows > 0) {
                $row = $result->fetch_object();
                $_SESSION['status'] = "login";
                $_SESSION['nama'] = $nama;
                if ($row->role == "mahasiswa") {
                    header('Location:./mahasiswa/dashboardMHS.php');
                } else if ($row->role == "operator") {
                    header('Location: ./operator/dashboardOPT.php');
                } else if ($row->role == "departemen") {
                    header('Location:./departemen/dashboardDPT.php');
                } else {
                    header('Location:./dosen/dashboardDSN.php');
                }
                exit;
            }
        }
        $db->close();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            background-color: #f1f1f1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            margin: 0;
            font-family: 'Inter', sans-serif;
        }

        .login-box {
            width: 400px;
            padding: 20px;
            background: #fff;
            border: 4px solid #545F71;
            border-radius: 16px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .website-name {
            font-size: 24px;
            font-weight: 500;
            color: #545F71;
            margin-bottom: 20px;
        }

        .welcome-text {
            color: #545F71;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .input-label {
            color: #545F71;
            font-size: 16px;
            font-weight: 400;
            margin-top: 10px;
            text-align: left;
        }

        .input-container {
            width: 100%;
            height: 60px;
            background: #F5F5F5;
            border-radius: 6px;
            display: flex;
            align-items: center;
            margin-top: 10px;
        }

        .input-label {
            width: 100px;
            padding: 10px;
        }

        .input-container input {
            width: calc(100% - 120px);
            border: none;
            outline: none;
            padding: 10px;
            font-size: 16px;
            font-weight: 400;
        }

        .password-toggle-button {
            cursor: pointer;
            background: none;
            border: none;
            padding: 0;
            margin: 0;
            font-size: 16px;
            color: #545F71;
        }

        .password-toggle-button:hover {
            text-decoration: underline;
        }

        .login-button {
            width: 100%;
            height: 48px;
            background: #545F71;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 16px;
            font-weight: 600;
            margin-top: 15px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .login-button:hover {
            background: #344052;
        }

        .logo {
            margin-top: 20px;
            max-width: 100px;
            height: auto;
        }
        </style>
</head>
<body>
    <div class="login-box">
        <div class="welcome-text">Selamat Datang di CHIWA</div>
        <img src="assets/images/chiwa.png" alt="CHIWA Logo" class="logo">
        <div class="input-label">Username</div>
        <div class="input-container">
            <input type="text" name="nama" id="username" placeholder="Username">
        </div>
        <div class="input-label">Password</div>
        <div class="input-container">
            <input type="password" name="password" id="password" placeholder="Password">
            <button class="password-toggle-button" onclick="togglePassword()">Show</button>
        </div>
        <div class="login-button" onclick="submitForm()">Login</div>
    </div>

    <script>
        function togglePassword() {
            var passwordInput = document.getElementById('password');
            var passwordToggleButton = document.querySelector('.password-toggle-button');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordToggleButton.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                passwordToggleButton.textContent = 'Show';
            }
        }

        function submitForm() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Anda dapat menambahkan logika pengiriman formulir Anda di sini
            <div class="form-group">
                <div class="error"><?php if(isset($error_nama)) echo $error_nama;?></div>
                <input type="text" class="form-control" placeholder="Username" id="users" name="nama" maxlength="50" value="<?php if(isset($nama)) echo $nama;?>">
            </div>
            <br>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" id="password" name="password" maxlength="50">
                <div class="error"><?php if(isset($error_password)) echo $error_password;?></div>
            </div>
            <br>
            <button type="submit" class="btn btn-dark" name="login" value="login">LOGIN</button>
        }
    </script>
</body>
</html>
