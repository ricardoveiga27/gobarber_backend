import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErrors';
import ImailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersTokensRepository from '@modules/users//repositories/IUserTokensRepository';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
    email: string;
}

@injectable()
class SendForgotPasswordEmailService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('MailProvider')
        private mailProvider: ImailProvider,

        @inject('UsersTokensRepository')
        private userTokensRepository: IUsersTokensRepository,
    ) {}

    public async execute({ email }: IRequest): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('User does not exists.');
        }

        await this.userTokensRepository.generate(user.id);

        this.mailProvider.sendMail(
            email,
            'Pedido de recuperação de senha recebido',
        );
    }
}

export default SendForgotPasswordEmailService;
