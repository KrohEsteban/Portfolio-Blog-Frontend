## Profolio

Este es el Portfolio de Esteban Kroh.
Lo pueden encontra online en [www.estebankroh.com](https://estebankroh.com)

Para correr el contenedor en desarrollo ejecutar los siguientes comando:

```bash
cp .env.dist .env
docker compose -f .docker/compose.yaml up dev
```

Para correr el contenedor en producción ejecutar los siguientes comando:

```bash
cp .env.dist .env
docker compose -f .docker/compose.yaml up prod
```
