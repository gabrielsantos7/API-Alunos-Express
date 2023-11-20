import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log('Server running on port 3000');
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
