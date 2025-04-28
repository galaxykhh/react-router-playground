import { http } from "~/features/core/utils/http";
import type { CartEntity } from "./types";

export function getCartById(id: number): Promise<CartEntity> {
    return http.get<CartEntity>(`carts/${id}`);
}
