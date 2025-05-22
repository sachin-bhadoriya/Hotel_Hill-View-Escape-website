import nodemailer from "nodemailer";
import dotenv from "dotenv";

// .env file se variables read karo
dotenv.config();
// const status = "Confirmed";
const sendEmail = async ({
  email,
  fullName,
  phoneNumber,
  // status,
  roomType,
  paymentMethod,
  specialRequests,
  numberOfGuests,
  fromDate,
  toDate,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: (email || "").trim(),
      subject: "🌄 Booking Confirmation - Hillview Escape",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2E8B57;">Dear ${fullName || "Guest"},</h2>
          
          <p>We are pleased to confirm your booking at <strong>Hillview Escape</strong>.</p>
      
          <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;">📱 <strong>Phone Number:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${phoneNumber || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;">🧍‍♂️ <strong>Guests:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${numberOfGuests || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;">🛏 <strong>Room Type:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${roomType || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;">📝 <strong>Special Requests:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${specialRequests || "None"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;">💳 <strong>Payment Method:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${paymentMethod || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;">📌 <strong>Status:</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;">📅 <strong>Booking Dates:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">
                ${fromDate || "?"} to ${toDate || "?"}
              </td>
            </tr>
          </table>
      
          <p style="margin-top: 20px;">If you have any questions or need assistance, feel free to contact us.</p>
      
          <p>We look forward to hosting you soon! 🌿</p>
      
          <p style="margin-top: 30px; font-style: italic;">Warm regards,<br />Team Hillview Escape</p>
        </div>
      `,

    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to", email);

  } catch (error) {
    console.error("❌ Failed to send email:", error.message || error);
  }
};

export default sendEmail;
