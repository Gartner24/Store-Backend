# Arquitectura de una API REST con Node.js y Express

- `/app`: Esta carpeta contiene la lógica principal de tu aplicación.
    - `/controllers`: Aquí se encuentran los controladores, que son responsables de manejar las solicitudes HTTP y las respuestas correspondientes.
    - `/models`: Aquí se encuentran los modelos, que son responsables de interactuar con la base de datos.
    - `/routes`: Aquí se encuentran las rutas, que son responsables de definir las rutas de la API.

- `/config`: Esta carpeta contiene la configuración de la base de datos.
    - `database.js`: Aquí se encuentra la configuración de la base de datos.

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