import * as bcrypt from 'bcryptjs';
import * as faker from 'faker';

export const generateUserList = (count = 100) =>
  [...Array(count).keys()].map(() => ({
    email: faker.internet.email(),
    roles: ['user'],
    passwordHashed: bcrypt.hashSync('Ch@nge123', 10)
  }));
