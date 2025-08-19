-- Create contacts table for form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  project_details TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Allow public contact form submissions" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading (admin only access)
CREATE POLICY "Prevent public reading of contacts" 
ON public.contacts 
FOR SELECT 
USING (false);