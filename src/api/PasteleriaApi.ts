import { isAxiosError } from "axios"
import api from "../config/axios"
import type { Product } from "../interfaces/Product"

export async function getProducts(): Promise<Product[]> {
    try {
        const { data } = await api<Product[]>("/products");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("Error inesperado al obtener productos");
    }
}

export async function createProduct(formData: FormData): Promise<Product> {
    try {
        const { data } = await api.post<Product>("/products", formData, {
            headers: {
                // ⚠️ No pongas Content-Type manualmente, Axios lo maneja
            },
        });
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message || "Error al crear producto");
        }
        throw new Error("Error inesperado al crear producto");
    }
}

export async function getProductById(id: string): Promise<Product | null> {
    try {
        const { data } = await api.get<Product>(`/products/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message || "Error al obtener producto");
        }
        throw new Error("Error inesperado al obtener producto");
    }
}

export async function deleteProduct(id: string): Promise<void> {
    try {
        await api.delete(`/products/${id}`);
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message || "Error al eliminar producto");
        }
        throw new Error("Error inesperado al eliminar producto");
    }
}

export async function updateProduct(id: string, formData: FormData): Promise<Product> {
    try {
        const { data } = await api.put<Product>(`/products/${id}`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message || "Error al actualizar producto");
        }
        throw new Error("Error inesperado al actualizar producto");
    }
}