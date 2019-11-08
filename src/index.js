import Path from 'path';
import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
//import express from 'express';
import { matchPath } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

/*const app = express();

app.use(express.static('public'));
app.use(express.static('images'));
app.get('*', (req, res) => {	
	const store = createStore();
	const sheet = new ServerStyleSheet(); 
	const promises = matchRoutes(Routes, req.path).map(({ route }) =>  {
		return route.loadData ? route.loadData(store) : null;
	});
	
	Promise.all(promises).then(() => {
		res.send(renderer(req, store, sheet));
	});
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});*/

const Server = new Hapi.server({
	port: 3000,
});

// Create a server with a host and port
const pre1 = async(request, h) => {
	
  try {
    const store = createStore();
	const sheet = new ServerStyleSheet(); 
	const promises = await matchRoutes(Routes, request.url.pathname).map(({ route }) =>  {
		return route.loadData ? route.loadData(store) : null;
	});
	
	
	return renderer(request, store, sheet, {});
	//Promise.all(promises).then(() => {
	//	return renderer(request, store, sheet, {});
	//});
	
	
	
	
	/*const store = createStore(),
		activeRoute = Routes.find( route => matchPath(request.url.pathname, route)) || {},
		data = activeRoute.loadData ? await activeRoute.loadData(store) : {},
		context = { ...data },
		sheet = new ServerStyleSheet(); 
	  
		return activeRoute;
		//return renderer(request, store, sheet, context);*/

  } catch(err) {

    console.warn(err);

  }
}

// Start the server
async function start() {

  try {
    // Register plugins
    await Server.register([Inert]);    

    // Add routes
    Server.route([
      {
        method: 'GET',
        path: '/public/{param*}',
        options: {
          handler: {
            directory: {
              path: 'public'
            }
          },
        }
      },
	  {
        method: 'GET',
        path: '/resourses/{param*}',
        options: {
          handler: {
            directory: {
              path: 'resourses'
            }
          },
        }
      },
	  {
        method: 'GET',
        path: '/images/{param*}',
        options: {
          handler: {
            directory: {
              path: 'images'
            }
          },
        }
      },
      {
        method:'GET',
        path:'/{param*}',
        options: {
          pre: [
            { method: pre1, assign: 'm1' }
          ],
          handler: async(request,h) => {
            const res = await request.pre.m1;			
            return h.response(res);
          }
        }
      }
    ])

    await Server.start()
  }
  catch (err) {
    console.warn(err)
  }

  console.log('Server running at:', Server.info.uri)
}

start()