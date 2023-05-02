
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  connectMongo().catch(err => res.json({
    error: 'connection failed!'
  }));

  // Only post method accepted
  if (req.method === 'POST') {

    if (!req.body) return res.status(404).json({ error: 'Don\'t have a form data! ' });

    const { username, email, password } = req.body;

    // check for duplicate user
    const checkExisting = await Users.findOne({ email });

    if (checkExisting) return res.status(422).json({ message: 'User already exists' });

    // hash password
    Users.create({ username, email, password: await hash(password, 12) })
      .then(data => res.status(201).json({ status: true, user: data }))
      .catch(err => ers.status(404).json({ err }));
  } else {
    res.status(500).json({ message: 'HTTP method not valid only POST Accepted' })
  }
}