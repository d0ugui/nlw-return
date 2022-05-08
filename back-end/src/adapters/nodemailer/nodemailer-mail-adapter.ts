import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapater";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b583db1ce49ba9",
    pass: "5b55fe0419f73c"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@fedget.com>',
      to: 'Douglas Oliveira <douglaspo_97@outlook.com>',
      subject,
      html: body,
    })
  }
}