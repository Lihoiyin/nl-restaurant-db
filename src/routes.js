import { Router } from 'express'
import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// STATIC
router.get('/', (await import('./controllers/static/home.js')).default)

// API | Auth
router.post('/api/auth/signup', (await import('./controllers/api/auth/signup.js')).default)
router.post('/api/auth/login', (await import('./controllers/api/auth/login.js')).default)
router.delete('/api/auth/logout', (await import('./controllers/api/auth/logout.js')).default)
router.get('/api/my/profile', (await import('./controllers/api/auth/profile.js')).default)

router.get('/api/couponOnUsers', authenticateUser('json'), (await import('./controllers/api/couponOnUsers/all.js')).default)
router.post('/api/couponOnUsers/:couponId', authenticateUser('json'), (await import('./controllers/api/couponOnUsers/new.js')).default)
router.get('/api/couponOnUsers/:id', authenticateUser('json'), (await import('./controllers/api/couponOnUsers/show.js')).default)
router.delete('/api/couponOnUsers/:id', authenticateUser('json'), (await import('./controllers/api/couponOnUsers/delete.js')).default)

router.get('/api/coupons', (await import('./controllers/api/coupons/all.js')).default)
router.post('/api/coupons', (await import('./controllers/api/coupons/new.js')).default)
router.get('/api/coupons/:id', (await import('./controllers/api/coupons/show.js')).default)
router.delete('/api/coupons/:id', (await import('./controllers/api/coupons/delete.js')).default)

router.put('/api/items/:id', (await import('./controllers/api/items/update.js')).default)
router.post('/api/items', (await import('./controllers/api/items/new.js')).default)
router.get('/api/items/:id', (await import('./controllers/api/items/show.js')).default)
router.delete('/api/items/:id', (await import('./controllers/api/items/delete.js')).default)

router.post('/api/itemsOnSet', (await import('./controllers/api/itemsOnSet/new.js')).default)
router.delete('/api/itemsOnSet/:id', (await import('./controllers/api/itemsOnSet/delete.js')).default)
router.get('/api/itemsOnSet/:id', (await import('./controllers/api/itemsOnSet/show.js')).default)

router.put('/api/menus/:id', (await import('./controllers/api/menus/update.js')).default)
router.post('/api/menus', (await import('./controllers/api/menus/new.js')).default)
router.get('/api/menus/:id', (await import('./controllers/api/menus/show.js')).default)
router.delete('/api/menus/:id', (await import('./controllers/api/menus/delete.js')).default)
router.get('/api/menus', (await import('./controllers/api/menus/all.js')).default)

router.put('/api/restaurants/:id', (await import('./controllers/api/restaurants/update.js')).default)
router.post('/api/restaurants', (await import('./controllers/api/restaurants/new.js')).default)
router.get('/api/restaurants/:id', (await import('./controllers/api/restaurants/show.js')).default)
router.delete('/api/restaurants/:id', (await import('./controllers/api/restaurants/delete.js')).default)
router.get('/api/restaurants', (await import('./controllers/api/restaurants/all.js')).default)

router.put('/api/sets/:id', (await import('./controllers/api/sets/update.js')).default)
router.post('/api/sets', (await import('./controllers/api/sets/new.js')).default)
router.get('/api/sets/:id', (await import('./controllers/api/sets/show.js')).default)
router.delete('/api/sets/:id', (await import('./controllers/api/sets/delete.js')).default)

router.put('/api/setOnOrders/:id', authenticateUser('json'), (await import('./controllers/api/setOnOrders/update.js')).default)
router.post('/api/setOnOrders', authenticateUser('json'), (await import('./controllers/api/setOnOrders/new.js')).default)
router.get('/api/setOnOrders/:id', authenticateUser('json'), (await import('./controllers/api/setOnOrders/show.js')).default)
router.delete('/api/setOnOrders/:id', authenticateUser('json'), (await import('./controllers/api/setOnOrders/delete.js')).default)

router.put('/api/orders', authenticateUser('json'), (await import('./controllers/api/orders/update.js')).default)
router.post('/api/orders', authenticateUser('json'), (await import('./controllers/api/orders/new.js')).default)
router.get('/api/orders/:id', authenticateUser('json'), (await import('./controllers/api/orders/show.js')).default)
router.delete('/api/orders/:id', authenticateUser('json'), (await import('./controllers/api/orders/delete.js')).default)
router.get('/api/cart', authenticateUser('json'), (await import('./controllers/api/orders/cart.js')).default)

export default router
