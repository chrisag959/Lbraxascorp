const functions = require('firebase-functions');
const fetch = require('node-fetch');

exports.generarImagen = functions.https.onRequest(async (req, res) => {
  try {
    // Obtener el texto proporcionado por el usuario desde la solicitud de Dialogflow
    const texto = req.body.queryResult.queryText;

    // Configurar los encabezados de la solicitud a la API de Vyro AI
    const headers = {
      'Authorization': 'vk-j9CmUXBg0K2LMyGGBiDXAgu3n2ByNxnB2Ofl2nbwmdcihkjD2',
      'Content-Type': 'application/json'
    };

    // Configurar los datos de la solicitud a la API de Vyro AI
    const body = JSON.stringify({ texto });

    // Realizar la solicitud a la API de Vyro AI
    const response = await fetch('https://api.vyro.ai/v1/imagine/api/generations', {
      method: 'POST',
      headers,
      body
    });

    // Verificar el estado de la respuesta de la API
    if (!response.ok) {
      throw new Error('Error en la solicitud a la API de Vyro AI');
    }

    // Obtener la imagen generada de la respuesta de la API de Vyro AI
    const data = await response.json();
    const imagenUrl = data.imageUrl;

    // Enviar la imagen generada como respuesta a Dialogflow
    const respuesta = {
      fulfillmentMessages: [
        {
          text: {
            text: [
              'Aquí tienes la imagen generada:'
            ]
          }
        },
        {
          image: {
            imageUri: imagenUrl
          }
        }
      ]
    };

    // Enviar la respuesta a Dialogflow
    res.json(respuesta);
  } catch (error) {
    console.error('Error al generar la imagen:', error);
    // Enviar un mensaje de error a Dialogflow
    res.json({ fulfillmentText: 'Lo siento, ha ocurrido un error al generar la imagen.' });
  }
});
