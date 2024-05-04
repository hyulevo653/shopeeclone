import { SuccessResponseApi } from "./ultils.type";
import { User } from "./user.type";

export type AuthResponse = SuccessResponseApi<{
    access_token: string
    expires: string
    user: User
}>

