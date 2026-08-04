const path = require('path');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

/**
 * Creates Nodemailer Transport using environment variables or returns fallback logger.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || process.env.HR_EMAIL || 'thegloblesolutionspvtltd@gmail.com';
  const pass = process.env.SMTP_PASS;

  if (user && pass) {
    const transportConfig = {
      host: host,
      port: port,
      secure: port === 465,
      auth: { user, pass },
      tls: { rejectUnauthorized: false }
    };

    return nodemailer.createTransport(transportConfig);
  }

  return null;
}

/**
 * Sends an email notification to the HR team when a user submits an Enquiry Form.
 */
async function sendHRInquiryEmail(inquiryData) {
  const hrEmail = process.env.HR_EMAIL || process.env.SMTP_USER || 'thegloblesolutionspvtltd@gmail.com';
  const senderEmail = process.env.HR_EMAIL || 'thegloblesolutionspvtltd@gmail.com';
  const { name, company_name, email, phone, service_required, budget, description, timestamp } = inquiryData;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e1e8ed; }
        .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff; padding: 25px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
        .header p { margin: 5px 0 0; font-size: 13px; color: #93c5fd; }
        .content { padding: 30px; }
        .badge { display: inline-block; padding: 4px 12px; background-color: #dbeafe; color: #1e40af; border-radius: 50px; font-size: 12px; font-weight: bold; margin-bottom: 20px; }
        .detail-row { display: flex; border-bottom: 1px solid #f1f5f9; padding: 10px 0; font-size: 14px; }
        .detail-label { width: 140px; font-weight: bold; color: #64748b; }
        .detail-value { flex: 1; color: #0f172a; font-weight: 600; }
        .description-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 15px; border-radius: 4px; margin-top: 15px; font-size: 14px; line-height: 1.6; color: #334155; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        .cta-button { display: inline-block; margin-top: 20px; padding: 12px 24px; background-color: #2563eb; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>THE GLOBLE SOLUTIONS</h1>
          <p>📩 New Customer Enquiry Notification</p>
        </div>
        <div class="content">
          <span class="badge">URGENT HR & SALES ACTION REQUIRED</span>
          <p>A new enquiry has been submitted through the company website. Below are the details:</p>
          
          <div class="detail-row">
            <div class="detail-label">Client Name:</div>
            <div class="detail-value">${name || 'N/A'}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Client Email:</div>
            <div class="detail-value"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone Number:</div>
            <div class="detail-value">${phone || 'N/A'}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Company Name:</div>
            <div class="detail-value">${company_name || 'N/A'}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Service Required:</div>
            <div class="detail-value">${service_required || 'General Enquiry'}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Estimated Budget:</div>
            <div class="detail-value">${budget || 'Not specified'}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Submitted At:</div>
            <div class="detail-value">${timestamp || new Date().toLocaleString()}</div>
          </div>

          <p style="margin-top: 20px; font-weight: bold; color: #0f172a;">Enquiry Message / Project Requirements:</p>
          <div class="description-box">
            ${description ? description.replace(/\n/g, '<br>') : 'No specific description provided.'}
          </div>

          <div style="text-align: center;">
            <a href="mailto:${email}?subject=Response to your Enquiry - THE GLOBLE SOLUTIONS" class="cta-button">Reply Directly to ${name}</a>
          </div>
        </div>
        <div class="footer">
          This is an automated enquiry notification from The Globle Solutions Web Portal.<br>
          Sent to HR Contact: <strong>${hrEmail}</strong>
        </div>
      </div>
    </body>
    </html>
  `;

  const transporter = createTransporter();

  if (!transporter) {
    console.log('\n==================================================');
    console.log('📧 [ENQUIRY EMAIL NOTIFICATION - HR FALLBACK LOG]');
    console.log(`To HR Email: ${hrEmail}`);
    console.log(`From Client: ${name} (${email}, Phone: ${phone || 'N/A'})`);
    console.log(`Service Requested: ${service_required || 'General Enquiry'}`);
    console.log(`Message: ${description || 'N/A'}`);
    console.log('⚠️ SMTP credentials are not configured yet. Add SMTP_PASS in backend/.env to deliver the enquiry email.');
    console.log('==================================================\n');
    return { success: true, delivered: false, fallback: true, message: 'Enquiry logged. Configure SMTP credentials in backend/.env to deliver the email.' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"The Globle Solutions Web Portal" <${senderEmail}>`,
      to: hrEmail,
      replyTo: email,
      subject: `🚨 New Web Enquiry from ${name} - ${service_required || 'General Enquiry'}`,
      html: htmlContent
    });
    console.log(`✅ [HR EMAIL SENT]: Message ID: ${info.messageId} to ${hrEmail}`);
    return { success: true, delivered: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ [HR EMAIL FAILURE]:', error.message);
    return { success: false, error: error.message };
  }
}

module.exports = {
  sendHRInquiryEmail
};
