import mongoose from 'mongoose';
import { Server } from 'http';
import app from './app';
import config from './app/config';
const { PORT, DB_URL } = config;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB_URL as string);

  app.listen(5000, () => {
    console.log(`App is listening on port 5000`);
  });
}
