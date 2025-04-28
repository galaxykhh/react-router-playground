import { http } from "~/features/core/utils/http";
import type { ProductEntity } from "./types";

export function getProductById(id: number): Promise<ProductEntity> {
    return http.get<ProductEntity>(`products/${id}`);
}
