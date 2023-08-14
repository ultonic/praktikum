const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./db');
app.use(cors());

app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const [rows, fields] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  
        if (rows.length === 0) {
          return done(null, false, { message: 'User not found.' });
        }
  
        const user = rows[0];
  
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) return done(null, user);
          return done(null, false, { message: 'Incorrect password.' });
        });
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    const query = 'SELECT * FROM users WHERE id = ?';
  
    db.query(query, [id], (err, results) => {
      if (err) {
        return done(err);
      }
  
      const user = results[0];
      done(null, user);
    });
  });

  app.post('/api/register', cors(), async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const [existingUserRows, existingUserFields] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      if (existingUserRows.length > 0) {
        return res.status(400).json({ message: 'User already exists.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);


      res.json({ message: 'Registration successful', user: {
          name: name,
          email: email
        } 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while registering.' });
    }
  });
  

  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    const user = req.user;

    res.json({ message: 'Login successful', user });
  });

  app.post('/api/submit-feedback', cors(), async (req, res) => {
    const { name, email, feedbackMessage } = req.body;
    
    try {
      const insertQuery = 'INSERT INTO feedback (name, email, feedback_message) VALUES (?, ?, ?)';
      await db.query(insertQuery, [name, email, feedbackMessage]);
      
      console.log('Feedback submitted');
      res.json({ message: 'Feedback submitted successfully' });

    } catch (error) {
      console.error('Error inserting feedback:', error);
      res.status(500).json({ message: 'Error submitting feedback' });
    }
  });