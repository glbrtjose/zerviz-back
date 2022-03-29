import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://root:fW05XHS7cqZb17vQ@cluster0.lovba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  },
];