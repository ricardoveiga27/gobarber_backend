# recuperação de senha

**RF**

- o usuário depoder recuperar sua senha informando seu email;
- o usuário deve receber um email com instruções de recuperação de senha;
- o usuário deve poder resetar sua senha;


**RNF**

- utilizar Mailtrap para testar envios em ambiente de dev;
- utilizar Amazon SES para envios em produção;
- o envio de emails deve acontecer em segundo plano (background job)

**RN**

-
- o link enviado por email para resetar senha deve expirar em 2h;
- o usuário precisa confirmar a nova ao resetar.

# atualização do perfil

**RF**

- o usuário deve poder atualizar seu nome, email e senha;


**RNF**

**RN**

- o usuário nao pode alterar para email já utilizado;
- para atualizar sua senha o usuário deve informar a senha antiga;
- para atualizar sua senha, o suário precisa confirmar a nova senha;
-

# painel do prestador

**RF**

- o usuário deve poder listar seus agendamentos de um dia especifico;
- o prestador deve receber uma notificação sempre houver um novo agendamento;
- o prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os Agendamentos do prestador no dia devem ser armazenados em cache;
- as notificações do prestador devem ser armazenadas no MongoDb;
- as notificações devem ser enviadas em tempo real usando Socket.io;

**RN**

- a notificação deve ter um status de lida ou não lida para  que o prestador possa controlar;


# agendamento de serviços

**RF**

- o usuário deve poder listar todos os prestadores cadastrados;
- o usuário deve poder listar os dias de um mês com pelo menos 1 horário disponivel.
- o usuário deve poder listar horários disponíveis em um dia especifico de um prestador;
- o usuário deve poder agendar um novo agendamento com um prestador.

**RNF**

- a listagem de prestadores deve ser armazenada em cache;


**RN**

- cada agendamento deve durar 1h exatamente;
- os agendamentos devem estar disponiveis entre 8h às 18hs (primeiro às 8hs, ultimo as 17hs);
- o usuário nao pode agendar em um horário ja ocupado;
- o usuário nao pode agendar em um horário que ja passou;
- o usuário não pode agendar horário com ele mesmo;
