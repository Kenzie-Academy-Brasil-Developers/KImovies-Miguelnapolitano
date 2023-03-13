import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'


const verifyDateAndHourMiddleware = async (req:Request, res:Response, next: NextFunction): Promise<void> => {

    const splitedHour = req.body.hour.split(":")

    const hours = splitedHour[0]

    if(hours < 8 || hours >= 18){
        throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
    }

    const weekDay = new Date(req.body.date)

    console.log(weekDay.toString().slice(0, 3))

    if(weekDay.toString().slice(0, 3) === "Sat" ||weekDay.toString().slice(0, 3) === "Sun" ){
        throw new AppError('Invalid date, work days are monday to friday', 400)
    }
    
    next()
}

export default verifyDateAndHourMiddleware