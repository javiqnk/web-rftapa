"use server";

import { dbConfig } from "@/lib/dbmysql";
import mysql, { RowDataPacket } from 'mysql2/promise';

const federationID = 3;

// Extraigo solo lo que me interesa de las licencias
export async function getDocumentByID(id: number) {

    try {
        // console.log('Obtengo federaciones: ')
        const connection = await mysql.createConnection(dbConfig)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT *
            FROM WebDocFiles
            WHERE webDocFileID = ?`, [id]
        );

        connection.end()

        return results[0];
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function getDocuments() {

    try {
        // console.log('Obtengo federaciones: ')
        const connection = await mysql.createConnection(dbConfig)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT *
            FROM WebDocFiles
            WHERE wdfFederationID = ? AND wdfDocStatusID = 2`, [federationID]
        );

        connection.end()

        return results;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function getDocumentsByCategory(id: number) {

    try {
        // console.log('Obtengo federaciones: ')
        const connection = await mysql.createConnection(dbConfig)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT *
            FROM WebDocFiles
            WHERE wdfFileTypeID = ? AND wdfFederationID = ? AND wdfDocStatusID = 2`, [id, federationID]
        );

        connection.end()

        return results;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function getDocumentsExceptCategory(id: number) {

    try {
        // console.log('Obtengo federaciones: ')
        const connection = await mysql.createConnection(dbConfig)
        const [results, fields] = await connection.query<RowDataPacket[]>(
            `SELECT *
            FROM WebDocFiles
            WHERE wdfFileTypeID != ? AND wdfFederationID = ? AND wdfDocStatusID = 2`, [id, federationID]
        );

        connection.end()

        return results;
    } catch (err) {
        console.log(err);
        return null;
    }
}