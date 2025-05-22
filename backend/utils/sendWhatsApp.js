import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendWhatsApp = async (booking) => {
  await client.messages.create({
    from: "whatsapp:+14155238886",
    to: `whatsapp:+91${booking.phoneNumber}`,
    body: `Hi ${booking.fullName}, your booking at Hillview Escape is confirmed from ${booking.fromDate} to ${booking.toDate}.`,
  });
};

export default sendWhatsApp;
