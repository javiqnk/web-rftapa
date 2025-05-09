"use server";

import { dbConfigFederated, federation } from "@/app/api/data/connections";
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function club(id:any) {

    try {
        const connection = await mysql.createConnection(dbConfigFederated)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT t3.*, t4.*, t5.*, t6.*, clubName as ClubName, dcpPublicURL as ClubPhoto, clubID as ClubID
            FROM Clubs t1 
            LEFT JOIN DocClubPhotos t2 ON t1.clubID = t2.dcpClubID
            LEFT JOIN Addresses t3 ON t1.clubHeadAddressID = t3.addressID
            LEFT JOIN DictMunicipalitiesString t4 ON t3.addressMunicipalityID = t4.municipalityID
            LEFT JOIN ContactInfo t5 ON t1.clubContInfoID = t5.contactInfoID
            LEFT JOIN RRSSInfo t6 ON t1.clubRRSSID = t6.rrssInfoID
            WHERE clubEnableFlag = 1 AND clubID = ?`, [id]
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