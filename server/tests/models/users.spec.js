import supertest from 'supertest';
import should from 'should';
import app from '../../server';
import '../../models/index';

const server = supertest.agent(app);
