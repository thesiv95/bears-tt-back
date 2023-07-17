# App setup and run

1. Copy `.env.example` contents to `.env` (not tracked by git).
2. Fill env vars (you can skip `APP_PORT` - then it will be 7000). DB is **mysql >= v7**.
3. `npm i` to install dependencies.
4. `npm run dev` - developer mode:
	- app will restart automatically on each change;
	- backend will show all error texts on routes response and write them into logs.
5. `npm start` - production mode:
	- typescript will be built to simple JS in folder `dist` (automatically);
	- backend will not show any error texts on routes response (but will write them into logs).

You can download Postman's example configuration [here](postman.json).

Author: [Ilya Soloveychik](mailto:thesiv95.work@gmail.com).
