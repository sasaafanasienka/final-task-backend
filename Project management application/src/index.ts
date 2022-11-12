import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';

const MONGO_LINK = "mongodb+srv://anton:iVQCssOPfSuJNOd9@cluster0.fa601fa.mongodb.net/?retryWrites=true&w=majority";

(async () => {
  try {
    await mongoose.connect(MONGO_LINK);
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
