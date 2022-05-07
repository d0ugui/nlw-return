import { MailAdapter } from "../adapters/mail-adapater";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackCaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ){}

  async execute(request: SubmitFeedbackCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type, 
      comment, 
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #222;">`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`
      ].join('\n')
    })
  }
}