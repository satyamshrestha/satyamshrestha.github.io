app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat', async (req, res) => {
  try {
    const userInput = req.query.userInput;
    console.log('Incoming /chat request:', userInput);
    
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request query' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in /chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
