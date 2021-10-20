import { serverHttp } from './app';

//* Definindo porta do servidor
serverHttp.listen(4000, () => console.log('Server is runnning on port 4000'));
