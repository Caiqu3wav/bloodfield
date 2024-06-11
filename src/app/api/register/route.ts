//@ts-nocheck
import bcrypt from 'bcryptjs';
import { NextResponse, } from "next/server.js";
import mysqlConn from "../mysqlConn.js";


export const POST = async (req: any) => {
    const { name, email, password } = await req.json();

    try{
    const userExistsQuery = `SELECT * FROM users WHERE email="${email}"`;
    const existingUser = await mysqlConn(userExistsQuery);

    if (existingUser.length > 0) {
        return new NextResponse("Email já utilizado", { status: 400 });
    } 

    const hashedPassword = await bcrypt.hash(password, 5);
    
    const insertUserQuery = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        const result = await mysqlConn(insertUserQuery, [name, email, hashedPassword]);

if (result.affectedRows > 0) {

    return new NextResponse("Usuário registrado com sucesso", { status: 200 });
} else {
    return new NextResponse("Erro ao registrar user", {status: 500});
}

} catch (err) {
    console.error("Erro ao registrar usuario:", err)
    return new NextResponse(err.message, { status: 500 });
}
};


export const GET = (Request) => {
    return new Response("oiii");
}