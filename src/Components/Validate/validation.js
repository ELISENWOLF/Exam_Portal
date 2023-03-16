import * as yup from 'yup'

const userSchema = yup.object().shape({
    email: yup.string().email().required("Email must be valid"),
    password: yup.string().min(4).max(50).required(),
})

export default userSchema