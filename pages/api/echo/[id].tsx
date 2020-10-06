import {NextApiRequest, NextApiResponse} from "next";

interface IdNextApiRequest extends NextApiRequest{
    query: {
        id: string
    }
}

export default function getByID(req: IdNextApiRequest, res: NextApiResponse){
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    res.end({yourId: req.query.id});
}