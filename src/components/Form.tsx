import { FormEvent, useState } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const UserDefault = {
    name: "",
    email: "",
    terms: false,
}

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [terms, setTerms] = useState(false);

    const [errors, setErrors] = useState<User | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors(null);

        const data: User = {
            name,
            email,
            terms,
        };

        const validateErrors = validate(data);

        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }

        setName(UserDefault.name);
        setEmail(UserDefault.email);
        setTerms(UserDefault.terms);

        alert("Obrigado por se inscrever!");
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label 
                    className="text-sm" 
                    htmlFor="name"
                >
                        Nome
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Digite o seu nome" 
                    className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors?.name && (
                    <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
                )}
            </div>
            <div className="flex flex-col">
                <label 
                    className="text-sm" 
                    htmlFor="email"
                >
                        E-mail
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Digite o seu melhor e-mail" 
                    className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors?.email && (
                    <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
                )}
            </div>
            <div className="flex flex-col">
                <a 
                    href="#"
                    className="text-xs underline mb-2"
                >
                        Leia os termos
                </a>
                <div className="flex gap-2 items-center">
                    <input 
                        type="checkbox" 
                        name="terms" 
                        id="terms" 
                        checked={terms}
                        onChange={(e) => setTerms(e.target.checked)}
                    />
                    <label 
                        className="text-sm" 
                        htmlFor="terms"
                        >
                            Concordo com os termos
                    </label>
                </div>
                {errors?.terms && (
                    <small className="text-xs text-red-500 mt-1">{errors?.terms}</small>
                )}
            </div>
            <button
                type="submit"
                className="bg-slate-600 hover:bg-slate-500 font-medium text-sm px-4 py-2 rounded-lg text-white"
            >
                Cadastrar
            </button>
        </form>
    )
}

export default Form;