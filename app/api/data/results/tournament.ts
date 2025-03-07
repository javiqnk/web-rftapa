"use server";

import { dbConfigResults } from "@/app/api/data/connections";
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function tournament(id:any) {

    try {
        const connection = await mysql.createConnection(dbConfigResults)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT DISTINCT idTour as TournamentId, TourCode as TournamentCode, TourName as TournamentName, TourWhere as TournamentWhere, TourWhenFrom as TournamentWhenFrom, 
            TourWhenTo as TournamentWhenTo
            FROM tournaments 
            WHERE TourCode = ?`, 
            [id]
        );
        var keyCount = Object.keys(results).length

        const [qualification, fields2] = await connection.query<RowDataPacket[]>(
            `SELECT *
            FROM enQual 
            WHERE tourCode = ?`, 
            [id]
        );

        const [finals, fields3] = await connection.query<RowDataPacket[]>(
            `SELECT *
            FROM enFinal 
            WHERE tourCode = ?`, 
            [id]
        );

        const [events, fields4] = await connection.query<RowDataPacket[]>(
            `SELECT *
            FROM enEvent 
            WHERE tourCode = ?`, 
            [id]
        );

        connection.end()

        const retData = {
            results: keyCount,
            data: results[0],
            qualification: qualification,
            finals: finals,
            events: events
        }

        return retData;
    } catch (err) {
        console.log(err);
        return null;
    }
};