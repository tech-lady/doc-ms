export const documentDetail = [{
  id: 1,
  ownerId: 1,
  title: 'Hello World',
  content: 'Welcome to this world',
  access: 'private',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  ownerId: 400,
  title: 'Joy',
  content: 'Joy to the world',
  access: 'private',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  ownerId: 401,
  title: 'We are making progress',
  content: 'Andela is fun, Andela is awesome',
  access: 'private',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  ownerId: 1,
  title: 'I have headache',
  content: 'I am very weary but no time for rest',
  access: 'public',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 5,
  ownerId: 400,
  title: 'Good better best ',
  content: 'My better is becoming much better',
  access: 'role',
  createdAt: new Date(),
  updatedAt: new Date()
}];

export const userDetail = [{
  id: 400,
  username: 'jbaby',
  email: 'yems@yems.com',
  password: '12345678',
  role: 'regular'
}, {
  id: 1,
  username: 'bestie',
  email: 'seun@seun.com',
  password: '12345678',
  role: 'admin'
}, {
  id: 401,
  username: 'tolu',
  email: 'one@one.com',
  password: '12345678',
  role: 'regular'
}];

export const roleDetail = [{
  id: 1,
  title: 'admin',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  title: 'regular',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  title: 'regular',
  createdAt: new Date(),
  updatedAt: new Date()
}];
