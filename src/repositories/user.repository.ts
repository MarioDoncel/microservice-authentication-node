import  User  from "../models/user.model"
import db from "../config/db"
require('dotenv/config');
import DatabaseError from "../models/errors/database.error.model";
class UserRepository {

    async findAllUsers():Promise<User[]>{
        try {
            const {rows:users} = await db.query<User>('SELECT uuid, username FROM application_user')
            return users
        } catch (error) {
            throw new DatabaseError('Erro na consulta de usuarios', error)
        }
       
    }
    async findById(uuid:string):Promise<User>{
        const query = `
        SELECT uuid, username 
        FROM application_user 
        WHERE uuid = $1
        `
        const values = [uuid]
        try {
            const {rows} = await db.query<User>(query, values)
            const [user] = rows
            return user
        } catch (error) {
            throw new DatabaseError('Erro na consulta por ID', error)
        }
        
    }
    async findByUsernameAndPassword(username:string, password:string):Promise<User | null>{
        try {
            const query = `
            SELECT uuid, username 
            FROM application_user 
            WHERE username = $1 
            AND password = crypt($2, $3)
            `
            const values = [username, password, process.env.ADMINPASSOWRDKEY]
            const {rows} =await db.query<User>(query, values)
            const [user] = rows
            return  user || null
        } catch (error) {
            throw new DatabaseError('Erro na consulta por Username e Password', error)
        }
       
    }

    async createUser(user:User):Promise<string>{
        
        const query = `
        INSERT INTO application_user (
            username,
            password
        ) VALUES ($1, crypt($2, $3))
        RETURNING uuid
        `
        const values = [user.username, user.password, process.env.ADMINPASSOWRDKEY]
        try {
            const {rows} = await db.query<{uuid:string}>(query, values)
            console.log(rows)
            const [newUser] = rows
            return newUser.uuid
        } catch (error) {
            throw new DatabaseError('Erro na criação de usuario', error)
        }
        
    }
    async updateUser(user:User):Promise<void>{
        try {
            const query = `
            UPDATE application_user 
            SET 
                username = $1,
                password = crypt($2, $3)
            WHERE uuid = $4
            RETURNING uuid
            `
            const values = [user.username, user.password, process.env.ADMINPASSOWRDKEY, user.uuid]
            await db.query(query, values)
            return
        } catch (error) {
            throw new DatabaseError('Erro na atualização de usuario', error)
        }
        
    }
    async deleteUser(uuid:string):Promise<void>{
        try {
            const query = `
            DELETE FROM application_user WHERE uuid = $1
            `
            const values = [uuid]
            await db.query(query,values)
            return
        } catch (error) {
            throw new DatabaseError('Erro ao deletar usuario', error)
        }
    }
}

export default new UserRepository