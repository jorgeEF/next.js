import { NextApiRequest, NextApiResponse } from 'next';
import userModel from '../models/userModel.ts'

// CRUD

// mostrar todos los usuarios: READ
export const getAllUsers = async () => {
    try {
        const users = await userModel.findAll();
        console.log("user en controlador: ", users);
        return users;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// mostrar un usuario
export const getUser = async (id: number) => {
    try {
        const user = await userModel.findByPk(id);
        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// crear un usuario
export const createUser = async (userData: any) => {
    try {
        await userModel.create(userData);
        return { message: "Usuario creado correctamente" };
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// editar un usuario
export const updateUser = async (id: number, userData: any) => {
    try {
        await userModel.update(userData, {
            where: { id }
        });
        return { message: "Usuario editado correctamente" };
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// eliminar un usuario
export const deleteUser = async (id: number) => {
    try {
        await userModel.destroy({ where: { id } });
        return { message: "Usuario eliminado correctamente" };
    } catch (error: any) {
        throw new Error(error.message);
    }
};