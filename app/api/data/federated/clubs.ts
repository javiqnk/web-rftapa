"use server";

import { dbConfigFederated, federationFed as federation } from "../connections";
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function clubs() {

    try {
        const connection = await mysql.createConnection(dbConfigFederated)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT clubName as ClubName, dcpPublicURL as ClubPhoto, clubID as ClubID
            FROM Clubs t1 LEFT JOIN DocClubPhotos t2 ON t1.clubID = t2.dcpClubID
            WHERE clubEnableFlag = 1 AND clubFederationID = ?`, [federation]

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