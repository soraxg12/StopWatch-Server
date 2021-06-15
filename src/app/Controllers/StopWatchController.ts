import { Request, Response } from 'express';
import { StopWatch } from '../Models/StopWatch';

class StopWatchController {
    //cria um item no banco de dados
    static async Create(req: Request, res: Response) {
        try {
            const StopWatchCreated = await StopWatch.create(req.body);

            return res.status(200).json(StopWatchCreated);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    // pegar todos os items
    static async FindAll(req: Request, res: Response) {
        try {
            const stopWatchGetAll = await StopWatch.find()

            return res.status(200).json(stopWatchGetAll);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    // pegar um item
    static async FindOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const stopWatch = await StopWatch.findOne({ _id: id });

            return res.status(200).json(stopWatch);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    // atualiza um item
    static async Update(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const stopWatchUpdated = await StopWatch.updateOne({ _id: id }, req.body);

            return res.status(200).json(stopWatchUpdated);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    // deleta um item
    static async DeleteOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deleted = await StopWatch.deleteOne({ _id: id });

            return res.status(200).json({ "delete with succesfull": deleted });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

export { StopWatchController }