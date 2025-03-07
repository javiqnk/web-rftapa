"use server";

import { dbConfigResults } from "@/app/api/data/connections";
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function atheleteResults(id: any) {

    try {
        const connection = await mysql.createConnection(dbConfigResults)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT t1.idQual as ResultsId, t1.tourCode as TournamentCode, TourName as TournamentName, TourWhere as TournamentWhere, TourWhenFrom as TournamentWhenFrom, TourWhenTo as TournamentWhenTo,
            t1.evCode as EventCode, t1.qualScore as QualificationScore, t1.qualRank as QualificationRank, t1.rank as FinalRank
            FROM enQual t1
            INNER JOIN tournaments t2 ON t2.TourCode = t1.tourCode
            WHERE t1.licencia = ?
            ORDER BY TourWhenTo DESC`,
            [id]
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