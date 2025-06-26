/*
  # Form Fills Database Schema

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `form_type` (text) - Type of form (contact, audit, newsletter, etc.)
      - `email` (text, required)
      - `created_at` (timestamp)
      - `ip_address` (text)
      - `user_agent` (text)
      - `source_url` (text)
      - `utm_source` (text)
      - `utm_medium` (text)
      - `utm_campaign` (text)
      - `status` (text) - new, contacted, converted, etc.

    - `contact_form_data`
      - `id` (uuid, primary key)
      - `submission_id` (uuid, foreign key)
      - `first_name` (text)
      - `last_name` (text)
      - `company` (text)
      - `phone` (text)
      - `revenue` (text)
      - `message` (text)

    - `audit_form_data`
      - `id` (uuid, primary key)
      - `submission_id` (uuid, foreign key)
      - `first_name` (text)
      - `last_name` (text)
      - `company` (text)
      - `website` (text)
      - `phone` (text)
      - `industry` (text)
      - `monthly_revenue` (text)
      - `marketing_budget` (text)
      - `primary_goal` (text)
      - `current_challenges` (text)
      - `current_marketing` (text[])
      - `timeframe` (text)
      - `hear_about_us` (text)

    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `submission_id` (uuid, foreign key)
      - `subscribed_at` (timestamp)
      - `unsubscribed_at` (timestamp)
      - `subscription_status` (text) - active, unsubscribed, bounced

    - `roi_calculator_data`
      - `id` (uuid, primary key)
      - `submission_id` (uuid, foreign key)
      - `monthly_revenue` (numeric)
      - `conversion_rate` (numeric)
      - `average_order_value` (numeric)
      - `monthly_traffic` (numeric)
      - `marketing_budget` (numeric)
      - `industry` (text)
      - `business_type` (text)
      - `calculated_roi` (numeric)
      - `projected_roi` (numeric)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read their own data
    - Add policies for service role to manage all data
*/

-- Create form_submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL,
  email text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text,
  source_url text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'closed')),
  notes text,
  assigned_to uuid REFERENCES auth.users(id),
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create contact_form_data table
CREATE TABLE IF NOT EXISTS contact_form_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES form_submissions(id) ON DELETE CASCADE,
  first_name text,
  last_name text,
  company text,
  phone text,
  revenue text,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Create audit_form_data table
CREATE TABLE IF NOT EXISTS audit_form_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES form_submissions(id) ON DELETE CASCADE,
  first_name text,
  last_name text,
  company text,
  website text,
  phone text,
  industry text,
  monthly_revenue text,
  marketing_budget text,
  primary_goal text,
  current_challenges text,
  current_marketing text[],
  timeframe text,
  hear_about_us text,
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES form_submissions(id) ON DELETE CASCADE,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz,
  subscription_status text DEFAULT 'active' CHECK (subscription_status IN ('active', 'unsubscribed', 'bounced', 'pending')),
  unsubscribe_reason text,
  created_at timestamptz DEFAULT now()
);

-- Create roi_calculator_data table
CREATE TABLE IF NOT EXISTS roi_calculator_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES form_submissions(id) ON DELETE CASCADE,
  monthly_revenue numeric,
  conversion_rate numeric,
  average_order_value numeric,
  monthly_traffic numeric,
  marketing_budget numeric,
  industry text,
  business_type text,
  calculated_roi numeric,
  projected_roi numeric,
  additional_revenue numeric,
  payback_period numeric,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON form_submissions(form_type);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_utm_source ON form_submissions(utm_source);

-- Create indexes for foreign keys
CREATE INDEX IF NOT EXISTS idx_contact_form_data_submission_id ON contact_form_data(submission_id);
CREATE INDEX IF NOT EXISTS idx_audit_form_data_submission_id ON audit_form_data(submission_id);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_submission_id ON newsletter_subscriptions(submission_id);
CREATE INDEX IF NOT EXISTS idx_roi_calculator_data_submission_id ON roi_calculator_data(submission_id);

-- Enable Row Level Security
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_form_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_form_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculator_data ENABLE ROW LEVEL SECURITY;

-- Create policies for form_submissions
CREATE POLICY "Users can view their own submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = assigned_to);

CREATE POLICY "Service role can manage all submissions"
  ON form_submissions
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Anonymous users can insert submissions"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for contact_form_data
CREATE POLICY "Users can view contact data for their submissions"
  ON contact_form_data
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM form_submissions 
      WHERE form_submissions.id = contact_form_data.submission_id 
      AND form_submissions.assigned_to = auth.uid()
    )
  );

CREATE POLICY "Service role can manage all contact data"
  ON contact_form_data
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Anonymous users can insert contact data"
  ON contact_form_data
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for audit_form_data
CREATE POLICY "Users can view audit data for their submissions"
  ON audit_form_data
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM form_submissions 
      WHERE form_submissions.id = audit_form_data.submission_id 
      AND form_submissions.assigned_to = auth.uid()
    )
  );

CREATE POLICY "Service role can manage all audit data"
  ON audit_form_data
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Anonymous users can insert audit data"
  ON audit_form_data
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for newsletter_subscriptions
CREATE POLICY "Users can view newsletter data for their submissions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM form_submissions 
      WHERE form_submissions.id = newsletter_subscriptions.submission_id 
      AND form_submissions.assigned_to = auth.uid()
    )
  );

CREATE POLICY "Service role can manage all newsletter data"
  ON newsletter_subscriptions
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Anonymous users can insert newsletter data"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for roi_calculator_data
CREATE POLICY "Users can view ROI data for their submissions"
  ON roi_calculator_data
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM form_submissions 
      WHERE form_submissions.id = roi_calculator_data.submission_id 
      AND form_submissions.assigned_to = auth.uid()
    )
  );

CREATE POLICY "Service role can manage all ROI data"
  ON roi_calculator_data
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Anonymous users can insert ROI data"
  ON roi_calculator_data
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_form_submissions_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create view for form analytics
CREATE OR REPLACE VIEW form_analytics AS
SELECT 
  form_type,
  COUNT(*) as total_submissions,
  COUNT(DISTINCT email) as unique_emails,
  DATE_TRUNC('day', created_at) as submission_date,
  COUNT(*) FILTER (WHERE status = 'converted') as conversions,
  ROUND(
    (COUNT(*) FILTER (WHERE status = 'converted')::numeric / COUNT(*)::numeric) * 100, 
    2
  ) as conversion_rate
FROM form_submissions
GROUP BY form_type, DATE_TRUNC('day', created_at)
ORDER BY submission_date DESC;

-- Grant access to the view
GRANT SELECT ON form_analytics TO authenticated;
GRANT SELECT ON form_analytics TO service_role;