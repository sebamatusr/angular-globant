// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// users data
const PERSONAJES = [
    {
        nombre: 'Piccolo',
        poder: 5000
      },
      {
        nombre: 'Trunks',
        poder: 10000
      },
      {
        nombre: 'Vegeta',
        poder: 13000
      },
      {
        nombre: 'Goku',
        poder: 15000
      }
  ];
  
  module.exports = [
    {
      id: "get-personajes", // id of the route
      url: "/api/personajes", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: PERSONAJES, // body to send
          },
        },
        {
          id: "error", // id of the variant
          response: {
            status: 400, // status to send
            body: {
              // body to send
              message: "Error",
            },
          },
        },
      ],
    },
    {
      id: "get-personaje", // id of the route
      url: "/api/personajes/:id", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: PERSONAJES[0], // body to send
          },
        },
        {
          id: "real", // id of the variant
          response: (req, res) => {
            const personajeNombre = req.params.nombre;
            const personaje = PERSONAJES.find((personajeData) => personajeData.nombre == personajeNombre);
            if (personaje) {
              res.status(200);
              res.send(personaje);
            } else {
              res.status(404);
              res.send({
                message: "User not found",
              });
            }
          },
        },
      ],
    },
  ];
  