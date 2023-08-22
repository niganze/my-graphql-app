
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface IQuery {
    getUsers(): User[] | Promise<User[]>;
    getUserById(id: number): User | Promise<User>;
}

export interface IMutation {
    createUser(data: CreateUserInput): User | Promise<User>;
    updateUser(id: number, data: UpdateUserInput): User | Promise<User>;
    deleteUser(id: number): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
