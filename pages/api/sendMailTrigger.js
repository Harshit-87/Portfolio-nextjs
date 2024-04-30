import { sendMail } from "./sendMail";

export default async function handler(req, res) {
  try {
    const { name, email, subject, message } = req.body;
    console.log("Inside trigger");
    console.log(name, email, subject, message);

    // Call the sendMail function with form data
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    const sendMailResult = await sendMail(formData);

    // Log the response from sending the email
    console.log("Response from sendMail:", sendMailResult);

    // Check the result of sending the email
    if (sendMailResult.success) {
      // If the email is sent successfully, return a success response with the sendMailResult
      return res
        .status(200)
        .json({ message: "Email sent successfully", sendMailResult });
    } else {
      // If there was an error sending the email, return an error response
      console.error("Error sending email:", sendMailResult.error);
      return res.status(500).json({ message: "Failed to send email" });
    }
  } catch (error) {
    // If an unexpected error occurs, return an error response
    console.error("Unexpected error:", error);
    return res.status(500).json({ message: "An unexpected error occurred" });
  }
}
