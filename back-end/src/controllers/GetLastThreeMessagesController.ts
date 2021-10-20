import { Request, Response } from 'express';
import { GetLastThreeMessages } from '../services/GetLastThreeMessages';

class GetThreeLastMessagesController {
  async handle(req: Request, res: Response) {
    const service = new GetLastThreeMessages();

    const result = await service.execute();

    return res.json(result);
  }
}

export { GetThreeLastMessagesController };
