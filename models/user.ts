

export interface IUser {
    firstName?: string
    lastName?: string
    userName?: string
    email?: string
    phone?: string
    address?: String
    bio?: String
    isEmailVerified?: boolean
    isActive?: boolean
    isDeleted?: boolean
    profile_img?: string
    dob?: Date
    createdDate?: Date
    updatedDate?: Date
    type?: Type
    platform?: string
    gcm_id?: string

}


export enum Type {
    user = 'user',
    reception = 'reception',
    admin = 'admin',
    superAdmin = "Super Admin"
}
