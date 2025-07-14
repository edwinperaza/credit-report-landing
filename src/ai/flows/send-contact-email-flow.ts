'use server';
/**
 * @fileOverview A flow to handle sending a contact form email.
 * - sendContactEmail - A function that handles the contact form submission.
 * - ContactFormInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactEmail from '@/components/emails/contact-email';

// Note: This API key is for development purposes only.
// You should use a real API key in production.
const resend = new Resend('re_123456789');

const ContactFormInputSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export async function sendContactEmail(
  input: ContactFormInput
): Promise<{ success: boolean; message: string }> {
  try {
    const result = await sendContactEmailFlow(input);
    return { success: true, message: result.message };
  } catch (error) {
    console.error('Error in sendContactEmail:', error);
    return { success: false, message: 'Failed to send message.' };
  }
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: z.object({
      message: z.string(),
    }),
  },
  async (input) => {
    console.log('Received contact form submission:');
    console.log('Name:', input.name);
    console.log('Email:', input.email);
    console.log('Phone:', input.phone);
    console.log('Message:', input.message);

    try {
      const { data, error } = await resend.emails.send({
        from: 'CreditRise <onboarding@resend.dev>',
        to: ['edwinperaza87@gmail.com'],
        subject: 'New Consultation Request from CreditRise',
        html: render(ContactEmail({ ...input })),
      });
      if (error) {
        console.error({ error });
        return { message: 'Email sending failed.' };
      }
      return {
        message: 'Contact form submission received and logged successfully.',
      };
    } catch (e: any) {
      return { message: `Email sending failed: ${e.message}` };
    }
  }
);
