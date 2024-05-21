import { UseFormGetValues, type RegisterOptions } from 'react-hook-form'
import * as yup from "yup"

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
    email: {
        required: {
            value: true,
            message: 'Bắt buộc nhập Email !'
        },
        pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Email không đúng định dạng !'
        },
        maxLength: {
            value: 160,
            message: 'Độ dài từ 5 - 160 ký tự'
        },
        minLength: {
            value: 5,
            message: 'Độ dài tối thiếu 5 ký tự'
        }
    },
    password: {
        required: {
            value: true,
            message: 'Bắt buộc nhập Passowrd !'
        },
        maxLength: {
            value: 160,
            message: 'Độ dài từ 6 - 160 ký tự'
        },
        minLength: {
            value: 6,
            message: 'Độ dài tối thiếu 5 ký tự'
        }
    },
    confirm_password: {
        required: {
            value: true,
            message: 'Bắt buộc nhập lại Password !'
        },
        maxLength: {
            value: 160,
            message: 'Độ dài từ 6 - 160 ký tự'
        },
        minLength: {
            value: 6,
            message: 'Độ dài tối thiếu 5 ký tự'
        },
        validate: typeof getValues === 'function' ? ((value) => value == getValues('password') || 'Nhập lại mật khẩu không khớp.') : undefined
    }
})

function testPriceMaxMin(this: yup.TestContext<yup.AnyObject>) {
    const { price_min, price_max } = this.parent as { price_min: string, price_max: string }
    if (price_min !== '' && price_max !== '') {
        return Number(price_max) >= Number(price_min)
    }
    return price_min !== '' || price_max !== ''
}
const handleConfirmPasswordYup = (refString: string) => {
    return yup
        .string()
        .required('Nhập lại password là bắt buộc')
        .min(6, 'Độ dài từ 6 - 160 ký tự')
        .max(160, 'Độ dài từ 6 - 160 ký tự')
        .oneOf([yup.ref(refString)], 'Nhập lại password không khớp')
}
export const schema = yup.object({
    email: yup
        .string()
        .required('Bắt buộc nhập Email !')
        .email('Email không đúng định dạng !')
        .min(5, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự'),
    password: yup.
        string()
        .required('Bắt buộc nhập Password !')
        .min(6, 'Độ dài từ 6 - 160 ký tự')
        .max(160, 'Độ dài từ 6 - 160 ký tự'),
    confirm_password: yup
        .string()
        .required('Bắt buộc nhập lại Password !')
        .min(6, 'Độ dài từ 6 - 160 ký tự')
        .max(160, 'Độ dài từ 6 - 160 ký tự')
        .oneOf([yup.ref('password')], 'Nhập lại mật khẩu không khớp.'),
    price_min: yup.string().test({
        name: 'price-not-allowed',
        message: 'Giá không phù hợp',
        test: testPriceMaxMin

    }),
    price_max: yup.string().test({
        name: 'price-not-allowed',
        message: 'Giá không phù hợp',
        test: testPriceMaxMin
    }),
    name: yup.string().trim().required('Tên sản phẩm bắt buộc')
})
export const userSchema = yup.object({
    name: yup.string().max(160, 'Độ dài tối đa là 160 ký tự'),
    phone: yup.string().max(20, 'Độ dài tối đa là 20 ký tự'),
    address: yup.string().max(160, 'Độ dài tối đa là 160 ký tự'),
    avatar: yup.string().max(1000, 'Độ dài tối đa là 1000 ký tự'),
    date_of_birth: yup.date().max(new Date(), 'Hãy chọn một ngày trong quá khứ'),
    password: schema.fields['password'] as yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>,
    new_password: schema.fields['password'] as yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>,
    confirm_password: handleConfirmPasswordYup('new_password') as yup.StringSchema<
        string | undefined,
        yup.AnyObject,
        undefined,
        ''
    >
})

export type UserSchema = yup.InferType<typeof userSchema>

const loginSchema = schema.omit(['confirm_password'])
type LoginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
