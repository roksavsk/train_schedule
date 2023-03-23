import { Request, Response } from 'express';

import connection from '../config/db';
import { Trains } from '../entity/trains';

exports.allTrains = async (req: Request, res: Response) => {
    const data = await connection.getRepository(Trains).find();
    res.render('train', { title: 'Trains list', data: data });
};

exports.findTrains = async (req: Request, res: Response) => {
    const data = await connection.getRepository(Trains).find({ where: req.body });
    res.render('train', { title: 'Trains list', data: data });
};

exports.postTrain = async (req: Request, res: Response) => {
    console.log(req.body);
    let results = {};
    try {
        const train = connection.getRepository(Trains).create(req.body);
        results = await connection.getRepository(Trains).save(train); 
    } catch (err) {
        console.log(err);
    } finally {
        return res.send(results);
    }
};

exports.deleteTrain = async (req: Request, res: Response) => {
    const results = await connection.getRepository(Trains).delete(req.params.id);
    return res.send(results);
};

exports.updateTrain = async (req: Request, res: Response) => {
    let results = {};
    try {
        const train = await connection.getRepository(Trains).findOneBy({
            id: Number(req.params.id),
        });
        connection.getRepository(Trains).merge(train!, req.body);
        results = await connection.getRepository(Trains).save(train!);
    } catch (err) {
        console.log(err);
    } finally {
        return res.send(results);
    }
};

export default exports;
