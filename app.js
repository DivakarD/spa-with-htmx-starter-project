import express from 'express';

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

export default app;