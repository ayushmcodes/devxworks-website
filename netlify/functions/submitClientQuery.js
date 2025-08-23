const { SMTPClient } = require('smtp-client');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Method not allowed',
      }),
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body);
    
    // Validate required fields
    const { name, email, projectDetails } = body;
    if (!name || !email || !projectDetails) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Name, email, and project details are required',
        }),
      };
    }

    // Log the submission (you can see this in Netlify function logs)
    console.log('Contact form submission:', {
      name,
      email,
      company: body.company || 'Not provided',
      projectDetails: projectDetails.substring(0, 100) + '...', // Truncate for logging
    });

    // Configure Zoho SMTP client
    const smtpClient = new SMTPClient({
      hostname: "smtp.zoho.com",
      port: 587,
      tls: true,
      auth: {
        username: process.env.ZOHO_SMTP_USER || "hello@devxworks.com",
        password: process.env.ZOHO_SMTP_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: 'hello@devxworks.com',
      to: 'ayush@devxworks.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #007bff; margin-top: 0;">Project Details:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${projectDetails}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 5px;">
            <p style="margin: 0; color: #0056b3;">
              <strong>Reply directly to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Company: ${body.company || 'Not provided'}
        
        Project Details:
        ${projectDetails}
        
        Reply directly to: ${email}
      `
    };

    // Send email
    try {
      await smtpClient.connect();
      
      const message = {
        from: 'hello@devxworks.com',
        to: ['ayush@devxworks.com'],
        subject: `New Contact Form Submission from ${name}`,
        message: mailOptions.html
      };
      
      await smtpClient.mail(message);
      await smtpClient.quit();
      
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Don't fail the entire request if email fails
      // Continue to return success to user
    }

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      }),
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Internal server error',
      }),
    };
  }
};
