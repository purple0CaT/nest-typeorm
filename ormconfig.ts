import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
//   autoLoadEntities: true,
  entities: ['dist/srs/**/*.entity.js'],
  synchronize: true, // TURN OF IN PRODUCTION, MAY LOSE DATA
};

export default config;
