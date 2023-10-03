# IT4W Challenge
## CodeChallenge
[Api Star Wars](https://swapi.dev/)
## Tecnologias Utilizadas
React,Axios,React-Router-Dom,Tailwind.
## Estrategia
Mi enfoque se centró en la creación de una galería de películas dentro de la aplicación.
Al acceder a una película específica, se proporciona una URL única (/film/:{id}) que permite a los usuarios acceder directamente a los detalles de esa película.

Dentro de la página de una película, los usuarios también tienen la capacidad de explorar los personajes asociados a dicha película. 
Esto se logra mediante URLs individuales para cada personaje (/character/:{id}), lo que facilita la navegación y el acceso a información detallada sobre los personajes.

Además, se incorporaron botones de retroceso y de regreso a la página principal (Home), donde se encuentran listadas todas las películas disponibles. 
Esta funcionalidad mejora la experiencia del usuario al permitir una navegación intuitiva y fluida.

Para realizar las solicitudes a la API de Star Wars, se empleó la biblioteca Axios. 
Además, se externalizó el manejo de las solicitudes HTTP mediante la creación de un adaptador HTTPAdapter,
lo que contribuye a un código más organizado y mantenible, en caso de sustitucion.
