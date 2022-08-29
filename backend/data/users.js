import bcrypt from 'bcryptjs';

const users = [
  {
    firstname: 'Lubo',
    lastname: 'Jechev',
    telephoneNumber: '0894420644',
    email: 'lubojechev@abv.bg',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    firstname: 'Kiro',
    lastname: 'Breika',
    telephoneNumber: '0894420644',
    email: 'kirobreika@abv.bg',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    firstname: 'Stanislav',
    lastname: 'Canov',
    telephoneNumber: '0894420644',
    email: 'stanislavcanov@abv.bg',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
