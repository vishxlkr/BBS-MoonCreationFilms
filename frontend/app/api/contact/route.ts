import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import { contactData } from "@/lib/contact-data";

const formSchema = z.object({
   fullName: z.string().min(2),
   phone: z.string().min(10),
   email: z.string().email(),
   service: z.string().min(1),
   eventDate: z.string().optional(),
   message: z.string().optional(),
   referral: z.string().min(1),
});

// Initialize Resend
// fallback to a dummy key to prevent build errors if env var is missing
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

export async function POST(req: Request) {
   try {
      const body = await req.json();

      // Validate request body
      const validatedData = formSchema.parse(body);

      const { fullName, phone, email, service, eventDate, message, referral } =
         validatedData;

      // In a real application, you would also verify reCAPTCHA here.

      // If Resend API key is not set, just mock success
      if (!process.env.RESEND_API_KEY) {
         console.log("Mocking email send since RESEND_API_KEY is not set.");
         console.log("Data:", validatedData);
         return NextResponse.json({ success: true });
      }

      const fromEmail =
         process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const toEmail = (process.env.RESEND_TO_EMAIL ||
         contactData.email[0]) as string;

      const { data, error } = await resend.emails.send({
         from: `Moon Creation Forms <${fromEmail}>`,
         to: toEmail,
         subject: `New Enquiry — ${service} — ${fullName}`,
         html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #F5F5F7; color: #0A1628; border: 1px solid #2756A0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #FFFFFF; padding: 20px; border-bottom: 2px solid #2756A0; text-align: center;">
            <h2 style="color: #2756A0; margin: 0; font-size: 24px;">New Client Enquiry</h2>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2); width: 150px;"><strong>Name</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);"><strong>Email</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);"><a href="mailto:${email}" style="color: #2756A0;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);"><strong>Phone</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);"><strong>Service</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);">${service}</td>
              </tr>
              ${
                 eventDate
                    ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);"><strong>Event Date</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);">${eventDate}</td>
              </tr>
              `
                    : ""
              }
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);"><strong>Referral</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(240,221,168,0.2);">${referral}</td>
              </tr>
            </table>
            
            ${
               message
                  ? `
            <div style="margin-top: 20px;">
              <strong>Message / Brief:</strong>
              <div style="margin-top: 10px; padding: 15px; background-color: rgba(240,221,168,0.05); border-left: 3px solid #2756A0; border-radius: 0 4px 4px 0;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            `
                  : ""
            }
          </div>
        </div>
      `,
      });

      if (error) {
         return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({ success: true, data });
   } catch (error) {
      if (error instanceof z.ZodError) {
         return NextResponse.json(
            { error: "Validation failed: " + (error as any).errors[0].message },
            { status: 400 },
         );
      }
      return NextResponse.json(
         { error: "Internal server error" },
         { status: 500 },
      );
   }
}
