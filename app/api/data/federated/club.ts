"use server";

import { dbConfigFederated, federation } from "@/app/api/data/connections";
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function club(id:any) {

    try {
        const connection = await mysql.createConnection(dbConfigFederated)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT DISTINCT idClub as ClubID, t1.Nombre as ClubName, t1.logo as ClubPhoto, t1.Municipio as ClubCity, Domicilio, CodPostal, Municipio, Provincia, Tel1, Tel2, Email1, Email2, Web, facebook, twitter, instagram, youtube, tiktok
            FROM clubes t1 
            WHERE Estado = 1 AND idClub = ?`, [id]
        );
        var keyCount = Object.keys(results).length

        connection.end()

        const retData = {
            results: keyCount,
            data: results[0]
        }

        return retData;
    } catch (err) {
        console.log(err);
        return null;
    }
};