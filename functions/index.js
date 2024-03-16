const functions = require('firebase-functions');
const fetch = require('node-fetch');

exports.generarImagen = functions.https.onRequest(async (req, res) => {
  try {
    if (!req.body || !req.body.queryResult || !req.body.queryResult.queryText) {
      throw new Error('Texto de la consulta no encontrado en la solicitud.');
    }

    const texto = req.body.queryResult.queryText;

    const headers = {
      Authorization: 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify({ texto });

    const response = await fetch('https://api.vyro.ai/v1/imagine/api/generations', {
      method: 'POST',
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud a la API de Vyro AI: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const imageUrl = data.imageUrl;

    const respuesta = {
      fulfillmentMessages: [
        { text: { text: ['Aquí tienes la imagen generada:'] } },
        { image: { imageUri: imageUrl } },
      ],
    };

    res.json(respuesta);
  } catch (error) {
    console.error('Error al generar la imagen:', error);
    res.status(500).json({ fulfillmentText: 'Lo siento, ha ocurrido un error al generar la imagen.' });
  }
});
