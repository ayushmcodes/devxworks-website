package main

import (
	"context"
	"encoding/json"
	"log"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type ContactRequest struct {
	Name           string `json:"name"`
	Email          string `json:"email"`
	Company        string `json:"company,omitempty"`
	ProjectDetails string `json:"projectDetails"`
}

type ContactResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Error   string `json:"error,omitempty"`
}

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	// Handle CORS preflight requests
	headers := map[string]string{
		"Content-Type":                 "application/json",
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
		"Access-Control-Allow-Methods": "POST, OPTIONS",
	}

	if request.HTTPMethod == "OPTIONS" {
		return &events.APIGatewayProxyResponse{
			StatusCode: 200,
			Headers:    headers,
			Body:       "",
		}, nil
	}

	// Only allow POST requests
	if request.HTTPMethod != "POST" {
		response := ContactResponse{
			Success: false,
			Error:   "Method not allowed",
		}
		body, _ := json.Marshal(response)
		return &events.APIGatewayProxyResponse{
			StatusCode: 405,
			Headers:    headers,
			Body:       string(body),
		}, nil
	}

	// Parse the request body
	var contactReq ContactRequest
	if err := json.Unmarshal([]byte(request.Body), &contactReq); err != nil {
		log.Printf("Error parsing request body: %v", err)
		response := ContactResponse{
			Success: false,
			Error:   "Invalid request body",
		}
		body, _ := json.Marshal(response)
		return &events.APIGatewayProxyResponse{
			StatusCode: 400,
			Headers:    headers,
			Body:       string(body),
		}, nil
	}

	// Validate required fields
	if contactReq.Name == "" || contactReq.Email == "" || contactReq.ProjectDetails == "" {
		response := ContactResponse{
			Success: false,
			Error:   "Name, email, and project details are required",
		}
		body, _ := json.Marshal(response)
		return &events.APIGatewayProxyResponse{
			StatusCode: 400,
			Headers:    headers,
			Body:       string(body),
		}, nil
	}

	// Log the contact form submission
	log.Printf("Contact form submission: Name=%s, Email=%s, Company=%s",
		contactReq.Name, contactReq.Email, contactReq.Company)
	log.Printf("Project Details: %s", contactReq.ProjectDetails)

	// TODO: Add database storage logic here
	// TODO: Add email sending logic here

	// Return success response
	response := ContactResponse{
		Success: true,
		Message: "Thank you for your message! We'll get back to you within 24 hours.",
	}
	body, _ := json.Marshal(response)

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers:    headers,
		Body:       string(body),
	}, nil
}

func main() {
	lambda.Start(handler)
}
