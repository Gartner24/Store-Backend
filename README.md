# Arquitectura de una API REST con Node.js y Express

1. `app.js`: Este archivo es el punto de entrada principal de tu aplicación Express. Aquí se crea la instancia de la aplicación y se configuran las rutas y middleware.

2. `config/`: En este directorio, se almacenan archivos de configuración relacionados con tu aplicación. En el ejemplo, el archivo `db.js` se encuentra aquí y se encarga de establecer la conexión con la base de datos MySQL.

3. `controllers/`: En este directorio, se definen los controladores de tu aplicación. Los controladores son responsables de manejar las solicitudes entrantes, procesar la lógica de negocio y enviar las respuestas adecuadas. En el ejemplo, se tienen los controladores `authController.js`, `productController.js` y `cartController.js` para las funcionalidades de autenticación, productos y carritos, respectivamente.

4. `models/`: En este directorio, se definen los modelos de datos que representan las entidades de tu aplicación. Cada modelo define la estructura de una tabla en la base de datos y proporciona métodos para interactuar con los datos. En el ejemplo, se tienen los modelos `user.js`, `product.js` y `cart.js` para representar las entidades de usuario, producto y carrito.

5. `routes/`: En este directorio, se definen las rutas y los endpoints de tu aplicación. Cada archivo de ruta se encarga de manejar las solicitudes HTTP y direccionarlas al controlador correspondiente. En el ejemplo, se tienen los archivos `authRoutes.js`, `productRoutes.js` y `cartRoutes.js` para las rutas relacionadas con la autenticación, productos y carritos, respectivamente.

6. `middleware/`: En este directorio, se encuentran los middlewares personalizados. Los middlewares son funciones que se ejecutan antes de que una solicitud llegue a los controladores. Pueden realizar tareas como la autenticación, la validación de datos o el manejo de errores. En el ejemplo, se tiene el archivo `authMiddleware.js` que contiene el middleware de autenticación.

7. `utils/`: En este directorio, se almacenan utilidades comunes utilizadas en tu aplicación. Pueden ser funciones auxiliares, manejadores de errores, validadores u otros archivos de utilidad. En el ejemplo, se tienen los archivos `errorHandler.js` y `validation.js` que contienen funciones para manejar errores y realizar validaciones, respectivamente.

1. Users Table:
   - user_id (Primary Key)
   - username (Unique)
   - password (Hashed)
   - full_name (Optional)
   - address (Optional)
   - email (Unique)
   - phone_number (Optional)
   - role (Admin or Customer)
   - registration_date (Optional)

2. Products Table:
   - product_id (Primary Key)
   - product_name (Unique)
   - description (Optional)
   - price (Optional)
   - quantity_available (Not Optional)
   - category_id (Foreign Key)

4. productsImages Table:
   - image_id (Primary Key)
   - product_id (Foreign Key)
   - is_main (Boolean)
   - image_url

5. Orders Table:
   - order_id (Primary Key)
   - user_id (Foreign Key)
   - order_date
   - order_status enum(Pending, Processing, Shipped, Delivered, Cancelled)
   - total_price
   - shipping_address

6. Categories Table:
   - category_id (Primary Key)
   - category_name
   - description

7. ShoppingCart Table:
   - cart_id (Primary Key)
   - user_id (Foreign Key)
   - product_id (Foreign Key)
   - quantity
   - total_price

Technologies used:

- Node.js
- Express
- MySQL
- Sequelize
- JWT
- CORS
- JOI
- Morgan
- Multer
- Cloudinary
- Nodemom
- swagger-ui-express
