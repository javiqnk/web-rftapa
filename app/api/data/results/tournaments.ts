"use server";

import { dbConfigResults, federation } from "@/app/api/data/connections";
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function tournaments() {

    try {
        // WHERE fede = ?
        const connection = await mysql.createConnection(dbConfigResults)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT DISTINCT idTour as TournamentId, TourCode as TournamentCode, TourName as TournamentName, TourWhere as TournamentWhere, TourWhenFrom as TournamentWhenFrom, 
            TourWhenTo as TournamentWhenTo
            FROM tournaments 
            WHERE fede = ?
            ORDER BY TourWhenFrom, TourWhenTo`, 
            [federation]
        );
        var keyCount = Object.keys(results).length

        connection.end()

        const retData = {
            results: keyCount,
            data: results
        }

        return retData;
    } catch (err) {
        console.log(err);
        return null;
    }
};