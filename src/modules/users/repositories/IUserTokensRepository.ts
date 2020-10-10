import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokenRepositoriy {
    generate(user_id: string): Promise<UserToken>;
    findByToken(token: string): Promise<UserToken | undefined>;
}
