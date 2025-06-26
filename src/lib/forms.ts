import { supabase } from './supabase';

export interface FormSubmissionData {
  formType: string;
  email: string;
  ipAddress?: string;
  userAgent?: string;
  sourceUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  revenue?: string;
  message?: string;
}

export interface AuditFormData {
  firstName?: string;
  lastName?: string;
  company?: string;
  website?: string;
  phone?: string;
  industry?: string;
  monthlyRevenue?: string;
  marketingBudget?: string;
  primaryGoal?: string;
  currentChallenges?: string;
  currentMarketing?: string[];
  timeframe?: string;
  hearAboutUs?: string;
}

export interface NewsletterData {
  subscriptionStatus?: string;
}

export interface ROICalculatorData {
  monthlyRevenue?: number;
  conversionRate?: number;
  averageOrderValue?: number;
  monthlyTraffic?: number;
  marketingBudget?: number;
  industry?: string;
  businessType?: string;
  calculatedRoi?: number;
  projectedRoi?: number;
  additionalRevenue?: number;
  paybackPeriod?: number;
}

// Helper function to get UTM parameters from URL
export const getUTMParameters = () => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utmSource: urlParams.get('utm_source') || undefined,
    utmMedium: urlParams.get('utm_medium') || undefined,
    utmCampaign: urlParams.get('utm_campaign') || undefined,
    utmContent: urlParams.get('utm_content') || undefined,
    utmTerm: urlParams.get('utm_term') || undefined,
  };
};

// Helper function to get client info
export const getClientInfo = () => {
  if (typeof window === 'undefined') return {};
  
  return {
    userAgent: navigator.userAgent,
    sourceUrl: window.location.href,
    ...getUTMParameters(),
  };
};

// Main function to submit form data
export const submitFormData = async (
  submissionData: FormSubmissionData,
  specificData?: ContactFormData | AuditFormData | NewsletterData | ROICalculatorData
) => {
  try {
    // Insert main form submission
    const { data: submission, error: submissionError } = await supabase
      .from('form_submissions')
      .insert([{
        form_type: submissionData.formType,
        email: submissionData.email,
        ip_address: submissionData.ipAddress,
        user_agent: submissionData.userAgent,
        source_url: submissionData.sourceUrl,
        utm_source: submissionData.utmSource,
        utm_medium: submissionData.utmMedium,
        utm_campaign: submissionData.utmCampaign,
        utm_content: submissionData.utmContent,
        utm_term: submissionData.utmTerm,
      }])
      .select()
      .single();

    if (submissionError) {
      throw submissionError;
    }

    // Insert specific form data based on form type
    if (specificData && submission) {
      let specificError;

      switch (submissionData.formType) {
        case 'contact':
          const { error: contactError } = await supabase
            .from('contact_form_data')
            .insert([{
              submission_id: submission.id,
              ...(specificData as ContactFormData),
            }]);
          specificError = contactError;
          break;

        case 'audit':
          const { error: auditError } = await supabase
            .from('audit_form_data')
            .insert([{
              submission_id: submission.id,
              ...(specificData as AuditFormData),
            }]);
          specificError = auditError;
          break;

        case 'newsletter':
          const { error: newsletterError } = await supabase
            .from('newsletter_subscriptions')
            .insert([{
              submission_id: submission.id,
              subscription_status: (specificData as NewsletterData).subscriptionStatus || 'active',
            }]);
          specificError = newsletterError;
          break;

        case 'roi_calculator':
          const { error: roiError } = await supabase
            .from('roi_calculator_data')
            .insert([{
              submission_id: submission.id,
              monthly_revenue: (specificData as ROICalculatorData).monthlyRevenue,
              conversion_rate: (specificData as ROICalculatorData).conversionRate,
              average_order_value: (specificData as ROICalculatorData).averageOrderValue,
              monthly_traffic: (specificData as ROICalculatorData).monthlyTraffic,
              marketing_budget: (specificData as ROICalculatorData).marketingBudget,
              industry: (specificData as ROICalculatorData).industry,
              business_type: (specificData as ROICalculatorData).businessType,
              calculated_roi: (specificData as ROICalculatorData).calculatedRoi,
              projected_roi: (specificData as ROICalculatorData).projectedRoi,
              additional_revenue: (specificData as ROICalculatorData).additionalRevenue,
              payback_period: (specificData as ROICalculatorData).paybackPeriod,
            }]);
          specificError = roiError;
          break;
      }

      if (specificError) {
        throw specificError;
      }
    }

    return { data: submission, error: null };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { data: null, error };
  }
};

// Contact form submission
export const submitContactForm = async (formData: ContactFormData & { email: string }) => {
  const clientInfo = getClientInfo();
  
  return submitFormData(
    {
      formType: 'contact',
      email: formData.email,
      ...clientInfo,
    },
    {
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company,
      phone: formData.phone,
      revenue: formData.revenue,
      message: formData.message,
    }
  );
};

// Audit form submission
export const submitAuditForm = async (formData: AuditFormData & { email: string }) => {
  const clientInfo = getClientInfo();
  
  return submitFormData(
    {
      formType: 'audit',
      email: formData.email,
      ...clientInfo,
    },
    {
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company,
      website: formData.website,
      phone: formData.phone,
      industry: formData.industry,
      monthlyRevenue: formData.monthlyRevenue,
      marketingBudget: formData.marketingBudget,
      primaryGoal: formData.primaryGoal,
      currentChallenges: formData.currentChallenges,
      currentMarketing: formData.currentMarketing,
      timeframe: formData.timeframe,
      hearAboutUs: formData.hearAboutUs,
    }
  );
};

// Newsletter subscription
export const submitNewsletterSubscription = async (email: string) => {
  const clientInfo = getClientInfo();
  
  return submitFormData(
    {
      formType: 'newsletter',
      email,
      ...clientInfo,
    },
    {
      subscriptionStatus: 'active',
    }
  );
};

// ROI Calculator submission
export const submitROICalculator = async (
  email: string, 
  calculatorData: ROICalculatorData
) => {
  const clientInfo = getClientInfo();
  
  return submitFormData(
    {
      formType: 'roi_calculator',
      email,
      ...clientInfo,
    },
    calculatorData
  );
};

// Get form submissions (for authenticated users)
export const getFormSubmissions = async (formType?: string) => {
  let query = supabase
    .from('form_submissions')
    .select(`
      *,
      contact_form_data(*),
      audit_form_data(*),
      newsletter_subscriptions(*),
      roi_calculator_data(*)
    `)
    .order('created_at', { ascending: false });

  if (formType) {
    query = query.eq('form_type', formType);
  }

  return query;
};

// Get form analytics
export const getFormAnalytics = async () => {
  return supabase
    .from('form_analytics')
    .select('*')
    .order('submission_date', { ascending: false });
};

// Update submission status
export const updateSubmissionStatus = async (
  submissionId: string, 
  status: string, 
  notes?: string
) => {
  return supabase
    .from('form_submissions')
    .update({ 
      status, 
      notes,
      updated_at: new Date().toISOString()
    })
    .eq('id', submissionId);
};

// Unsubscribe from newsletter
export const unsubscribeNewsletter = async (email: string, reason?: string) => {
  // First, get the newsletter subscription
  const { data: submissions } = await supabase
    .from('form_submissions')
    .select(`
      id,
      newsletter_subscriptions(id)
    `)
    .eq('email', email)
    .eq('form_type', 'newsletter');

  if (submissions && submissions.length > 0) {
    // Update all newsletter subscriptions for this email
    for (const submission of submissions) {
      if (submission.newsletter_subscriptions && submission.newsletter_subscriptions.length > 0) {
        await supabase
          .from('newsletter_subscriptions')
          .update({
            subscription_status: 'unsubscribed',
            unsubscribed_at: new Date().toISOString(),
            unsubscribe_reason: reason,
          })
          .eq('submission_id', submission.id);
      }
    }
  }

  return { success: true };
};