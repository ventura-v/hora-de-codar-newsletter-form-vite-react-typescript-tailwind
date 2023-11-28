import { User} from "../types/User";

type Error = {
    [key: string]: string;
};

export const validate = (data: User) => {

    const errors: Error = {};

    if(!data.name) {
        errors["name"] = "O nome é obrigatório!";
    }

    if(!data.email) {
        errors["email"] = "O e-mail é obrigatório!";
    }

    if(!data.terms) {
        errors["terms"] = "Você deve aceitar os termos!";
    }

    return errors;
}