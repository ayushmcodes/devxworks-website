const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email
    try {
      // Send mail with Resend
      const { data, error } = await resend.emails.send({
        from: "ayush@devxworks.com", 
        to: "ayush@devxworks.com",
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${body.company || "Not provided"}</p>
          <p><strong>Project Details:</strong><br>${projectDetails}</p>
        `,
      });
      console.log('Email sent successfully:', result.messageId);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
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
