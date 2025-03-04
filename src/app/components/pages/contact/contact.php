<?php
/* header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json"); */

header("Access-Control-Allow-Origin: *"); // Change * to your frontend URL for security
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight (OPTIONS request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Process only POST requests
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get JSON input from Angular frontend
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate required fields
    if (!isset($data['name'], $data['email'], $data['phone'], $data['device'], $data['message'])) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit();
    }

    // Assign values
    $name = htmlspecialchars(strip_tags($data['name']));
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags($data['phone']));
    $device = htmlspecialchars(strip_tags($data['device']));
    $message = htmlspecialchars(strip_tags($data['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit();
    }

    // Email recipient (Change this to your email)
    $to = "your-email@example.com"; // Replace with your actual email
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nDevice: $device\nMessage:\n$message";

    // Headers
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Your message has been sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email. Please try again later."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>

