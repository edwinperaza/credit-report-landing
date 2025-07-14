
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContactEmail({ name, email, phone, message }: ContactEmailProps) {
  const previewText = `New message from ${name} on CreditRise`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Consultation Request</Heading>
          <Text style={paragraph}>You have received a new message from your website contact form.</Text>
          <Hr style={hr} />
          <Section>
            <Text style={label}>Full Name:</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email Address:</Text>
            <Text style={value}>{email}</Text>

            {phone && (
              <>
                <Text style={label}>Phone Number:</Text>
                <Text style={value}>{phone}</Text>
              </>
            )}

            <Text style={label}>Message:</Text>
            <Text style={messageValue}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>This email was sent from the CreditRise landing page.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#484848',
  padding: '0 40px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#484848',
  padding: '0 40px',
};

const label = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#8898aa',
  margin: '0',
  padding: '0 40px',
};

const value = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#484848',
  margin: '0 0 20px 0',
  padding: '0 40px',
};

const messageValue = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#484848',
  margin: '0 0 20px 0',
  padding: '0 40px',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 40px',
};

