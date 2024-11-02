export interface CoupleModel {
    male: PersonModel;
    female: PersonModel;
}

export interface PersonModel {
    fullName: string;
    description?: string;
    avatar: AvatarModel;
}

export interface AvatarModel {
    src: string;
    with: number;
    height: number;
}