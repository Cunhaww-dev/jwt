import { Request, Response } from 'express';

export class ProductsController {
  async index(req: Request, res: Response) {
    return res.json({ message: 'Products index' });
  }

  async create(req: Request, res: Response) {
    return res.json({ message: req.user?.role });
  }
}
