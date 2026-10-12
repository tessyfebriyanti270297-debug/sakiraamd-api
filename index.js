const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
res.json({
status: true,
creator: 'SakiraaMD',
message: 'API SakiraaMD berhasil online! 🔥',
endpoints: {
health: '/health'
}
});
});

app.get('/health', (req, res) => {
res.json({
status: true,
message: 'Server berjalan normal'
});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
console.log("SakiraaMD API berjalan di port ${PORT}");
});
