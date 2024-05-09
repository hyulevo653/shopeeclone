import { Product, ProductListConfig } from "src/types/product.type"
import { SuccessResponseApi } from "src/types/ultils.type"
import http from "src/utils/http"

const URL = 'products'
const productApi = {
    getProduct(params: ProductListConfig) {
        return http.get<SuccessResponseApi<ProductListConfig>>(URL, {
            params
        })
    },
    getProductDetail(id: string) {
        return http.get<SuccessResponseApi<Product>>(`${URL}/${id}`)
    }
}

export default productApi