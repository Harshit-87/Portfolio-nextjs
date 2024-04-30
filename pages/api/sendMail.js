import nodemailer from "nodemailer";
import path from "path";

// Define the sendMail function
const sendMailFunction = async (formData) => {
  const { name, email, subject, message } = formData;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // Verify transporter connection
    await transporter.verify();

    // Construct HTML content for the email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #007bff;">New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `;

    // Define mail options
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "Someone Texted me on my Portfolio",
      text: `${name} ${email} ${subject} ${message}`,
      html: htmlContent,
    };

    // Send the email and store the result in a constant variable res
    const res = await transporter.sendMail(mailOptions);

    // If the email is sent successfully, return the result
    return { success: true, message: "Email sent successfully", response: res };
  } catch (error) {
    // If an error occurs during the email sending process, return an error response
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email" };
  }
};

// Export the sendMail function
export const sendMail = sendMailFunction;
