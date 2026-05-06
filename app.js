const express = require('express');
const app = express();
const path = require('path');

// 1. Configurar archivos estáticos (CSS, Imágenes, JS de cliente)
app.use(express.static('public'));

// 2. Configurar el motor de plantillas (EJS es el más sencillo)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const jugador =[
        { nombre: 'Roony Bardghji', posicion: 'Delantero', dorsal: 19, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/3ae86d91-e8c5-415e-9299-3b26ec0d2930/28-Bardghji.jpg?width=1200&height=1200' },
        { nombre: 'Marcus Rashford', posicion: 'Delantero', dorsal: 14, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/10/85f7a271-6b29-4459-be8b-128cb25596d0/14-Rashford.jpg?width=1200&height=1200' },
        { nombre: 'Raphinha', posicion: 'Delantero', dorsal: 11, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/10/08bbb1ff-004b-4623-a675-66fd1fbfdc8b/11-Raphinha.jpg?width=1200&height=1200' },
        { nombre: 'Lamine Yamal', posicion: 'Delantero', dorsal: 10, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/a9ecee2c-116c-405c-8524-3127913e7a3c/10-Lamine.jpg?width=1200&height=1200' },
        { nombre: 'Robert Lewandowski', posicion: 'Delantero', dorsal: 9, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/10/6dd5aa47-d5fb-45a5-b171-0da82c9c7105/09-Lewandowski.jpg?width=1200&height=1200' },
        { nombre: 'Ferran Torres', posicion: 'Delantero', dorsal: 7, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/c83c3cf6-9c12-41c4-b6fa-ea4cfa2bf7dc/07-Ferran_Torres.jpg?width=1200&height=1200' },
        { nombre: 'Marc Bernal', posicion: 'Centrocampista', dorsal: 22, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/d19a70cc-af3f-4ea0-b0d8-5ef0d098211a/22-Bernal.jpg?width=1200&height=1200' },
        { nombre: 'Frenkie de Jong', posicion: 'Centrocampista', dorsal: 21, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/793001b1-f225-4259-8a74-27e418a3e4c9/21-De_Jong.jpg?width=1200&height=1200' },
        { nombre: 'Dani Olmo', posicion: 'Centrocampista', dorsal: 20, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/79af1dbc-34f3-4bb7-9ee4-08269866ab47/20-Olmo.jpg?width=1200&height=1200' },
        { nombre: 'Marc Casado', posicion: 'Centrocampista', dorsal: 17, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/aee1292c-f40e-46e9-8b45-c19646ad3a04/17-Casado.jpg?width=1200&height=1200' },
        { nombre: 'Fermin Lopez', posicion: 'Centrocampista', dorsal: 16, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/4e851606-cfd6-4dc4-9042-c3dee40dbeb7/16-Fermin.jpg?width=1200&height=1200' },
        { nombre: 'Pedri', posicion: 'Centrocampista', dorsal: 8, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/10/597a1e13-c0b2-4c93-a2fd-4cc39a9459cc/08-Pedri.jpg?width=1200&height=1200' },
        { nombre: 'Gavi', posicion: 'Centrocampista', dorsal: 6, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/21356702-1d94-49a8-a94a-4170afe7ca16/06-Gavi.jpg?width=1200&height=1200' },
        { nombre: 'Eric Garcia', posicion: 'Defensa', dorsal: 24, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/ab15b5c3-c764-40f7-983c-0fbd0ccd61bd/24-Eric_Garcia.jpg?width=1200&height=1200' },
        { nombre: 'Jules Koundé', posicion: 'Defensa', dorsal: 23, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/e25e8ccc-4b69-48ef-8c48-2eebbcc74770/23-Kounde.jpg?width=1200&height=1200' },
        { nombre: 'Gerard Martin', posicion: 'Defensa', dorsal: 18, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/6fd05ccb-8562-4ffd-9cc8-2d36762a3634/18-Martin.jpg?width=1200&height=1200' },
        { nombre: 'Andreas Christensen', posicion: 'Defensa', dorsal: 15, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/11a6228b-5034-4d25-9fe3-ea3aafd04dd2/15-Christensen.jpg?width=1200&height=1200' },
        { nombre: 'Pau Cubarsí', posicion: 'Defensa', dorsal: 5, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/2ca1e448-3d31-4ff2-9909-44fd00368472/02-Cubarsi.jpg?width=1200&height=1200' },
        { nombre: 'Ronald Araújo', posicion: 'Defensa', dorsal: 4, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/46af26e5-df57-406a-9bb1-b6f037631f0f/04-Araujo.jpg?width=1200&height=1200' },
        { nombre: 'Alejandro Balde', posicion: 'Defensa', dorsal: 3, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/82dfc9f5-ffc4-4b47-a828-21de924f9b5f/03-Balde.jpg?width=1200&height=1200' },
        { nombre: 'Joao Cancelo', posicion: 'Defensa', dorsal: 2, foto: 'https://www.fcbarcelona.com/photo-resources/2026/01/15/79a75f80-8fb9-4213-b87f-f6fa2c4f4ec4/00-Cancelo.jpg?width=1200&height=1200' },
        { nombre: 'Wojciech Szczęsny', posicion: 'Portero', dorsal: 25, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/01ac5137-9725-4e97-858e-711344d43fb5/25-Szczesny.jpg?width=1200&height=1200' }, 
        { nombre: 'Joan Garcia', posicion: 'Portero', dorsal: 13, foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/2b12f57a-582e-408a-b23e-ec9c42b0d5b9/01-Joan_Garcia.jpg?width=1200&height=1200' },
    ]
    res.render('index', { 
        titulo: 'FC Barcelona',
        subtitulo: 'Bienvenidos al sitio oficial de los fans',
        lema: 'MÉS QUE UN CLUB',
        estadio: 'Spotify Camp Nou',
        mensaje: '¡Únete a la Penya Blaugrana!',
        nomEquipo: 'Plantilla 25/26',
        jugadores: jugador,
        entrenador: { nombre: 'Hansi Flick', puesto: 'Entrenador', foto: 'https://www.fcbarcelona.com/photo-resources/2025/09/09/6b074293-dfb2-4f25-a0e3-3c02b351d730/00-Hansi_Flick.jpg?width=1200&height=1200' }
    });
    
});


/* app.listen(3000, () => {
    console.log('Landing corriendo en http://localhost:3000');
}); */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
//menu, footer, slider, boostrap, responsive