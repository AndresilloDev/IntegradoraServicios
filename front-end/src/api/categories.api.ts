import { instance } from './base.api';

const endpoint = "category";

export const categories = {
    getAll: async () => {
        return await instance.get(`${endpoint}/findAll`);
    },
    create: async (data: Record<string, any>) => {
        return await instance.post(`${endpoint}/add`, data);
    },
    update: async (id: number | string, data: Record<string, any>) => {
        return await instance.put(`${endpoint}/update/${id}`, data);
    },
    delete: async (id: number | string) => {
        return await instance.delete(`${endpoint}/delete/${id}`);
    },
    activate: async (id: number | string) => {
        return await instance.put(`${endpoint}/activate/${id}`);
    },
    deactivate: async (id: number | string) => {
        return await instance.put(`${endpoint}/deactivate/${id}`);
    },
};