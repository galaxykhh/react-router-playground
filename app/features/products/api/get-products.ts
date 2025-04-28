import { http } from "~/features/core/utils/http";
import type { ProductEntity } from "./types";

export function getProducts(): Promise<ProductEntity[]> {
    return http.get<ProductEntity[]>("products");
}
