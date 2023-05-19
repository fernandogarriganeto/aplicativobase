/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{

  Route.resource('/users', 'UsersController')

  Route.post('login', async ({ auth, request, response }) => {
    const email = request.input('email')
    const password = request.input('password')    

    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch {
      return response.unauthorized('invalid credential')
    }
  })



  Route.get('dashboard', async ({ auth }) => {
    await auth.use('api').authenticate()
    return `Olá ${auth.user?.name}, você está autenticado!`
  })

  //Route.get('/', async () => {
    //return { hello: 'world' }
  //})

}).prefix('/api')