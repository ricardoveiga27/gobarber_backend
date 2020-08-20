import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErrors';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequestDTO {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute({
        name,
        email,
        password,
    }: IRequestDTO): Promise<User> {
        const userRepository = getRepository(User);

        const checkUserExists = await this.usersRepository.findByEmail(email);

        if (checkUserExists) {
            throw new AppError('Email address alredy used.', 401);
        }

        const hashedPassword = await hash(password, 8);

        const user = await userRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        return user;
    }
}

export default CreateUserService;
