import { Category } from "src/types/category.type"
import { ErrorResponse } from "src/types/ultils.type"
import http from "src/utils/http"

const URL = 'categories'
const categoryAPI = {
    getCategories() {
        return http.get<ErrorResponse<Category[]>>(URL)
    }
}
export default categoryAPI