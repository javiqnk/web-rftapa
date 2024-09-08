"use server";

import { dbConfigFederated, federation } from "../connections";
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function clubs() {

    try {
        const connection = await mysql.createConnection(dbConfigFederated)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT DISTINCT idClub as ClubID, t1.Nombre as ClubName, t1.logo as ClubPhoto, t1.Municipio as ClubCity
            FROM clubes t1 
            WHERE Estado = 1 AND Federacion = ?`, [federation]

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