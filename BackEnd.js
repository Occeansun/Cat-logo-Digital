const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dados simulados
const produtos = [
	{ id: 1, nome: 'Piso Vinílico Ecomex A', categoria: 'Pisos Vinílicos', marca: 'ECOMEX' },
	{ id: 2, nome: 'Piso Vinílico Tarkett B', categoria: 'Pisos Vinílicos', marca: 'TARKETT' },
	{ id: 3, nome: 'Piso Vinílico Beloflex C', categoria: 'Pisos Vinílicos', marca: 'BELOFLEX' },
	{ id: 4, nome: 'Piso Vinílico Ruffino D', categoria: 'Pisos Vinílicos', marca: 'RUFFINO' },
	{ id: 5, nome: 'Carpete Beloflex E', categoria: 'Carpetes', marca: 'BELOFLEX' },
	{ id: 6, nome: 'Carpete São Carlos F', categoria: 'Carpetes', marca: 'SÃO CARLOS' },
	{ id: 7, nome: 'Piso Tátil Daliq G', categoria: 'Pisos Táteis', marca: 'DALIQ' },
	{ id: 8, nome: 'Rodapé Ecomex H', categoria: 'Rodapés', marca: 'ECOMEX' },
];

const categorias = [
	'Pisos Vinílicos',
	'Carpetes',
	'Pisos Táteis',
	'Rodapés',
];

const marcas = [
	'ECOMEX',
	'TARKETT',
	'BELOFLEX',
	'RUFFINO',
	'SÃO CARLOS',
	'DALIQ',
];

// Rotas
app.get('/categorias', (req, res) => {
	res.json(categorias);
});

app.get('/marcas', (req, res) => {
	res.json(marcas);
});

// Listar produtos com filtros
app.get('/produtos', (req, res) => {
	let { categoria, marca, busca } = req.query;
	let resultado = produtos;
	if (categoria) {
		resultado = resultado.filter(p => p.categoria === categoria);
	}
	if (marca) {
		resultado = resultado.filter(p => p.marca === marca);
	}
	if (busca) {
		resultado = resultado.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()));
	}
	res.json(resultado);
});

app.listen(PORT, () => {
	console.log(`API do Catálogo Digital rodando em http://localhost:${PORT}`);
});
