"use server";

import { dbConfigFederated, federation } from "@/app/api/data/connections";
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function athlete(id:any) {

    try {
        const connection = await mysql.createConnection(dbConfigFederated)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT DISTINCT idFed as FederatedId, t1.Nombre as Name, Apellidos as Surname, t1.Provincia as Province, t1.Municipio as Municipality, 
            fechaNacimiento as BirthDate, Sexo as Gender, t3.Nombre as ClubName, t3.LicenciaClub as ClubLicense, Foto as FederatedPhoto, Licencia as FederatedLicense
            FROM federados t1 
            LEFT JOIN licencias t2 ON (t1.idFed = t2.idFederado)
            LEFT JOIN clubes t3 ON (t2.idClubLic = t3.LicenciaClub)
            WHERE t1.idFed = ? AND Modalidad = "DEPORTISTA"
            GROUP BY FederatedId
            ORDER BY t3.LicenciaClub DESC`, 
            [id]
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