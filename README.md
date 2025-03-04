# Strapi CMS Backend Setup

This guide will walk you through setting up a Strapi CMS backend project using PostgreSQL as the database.

---

## Prerequisites

Before starting, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/) or npm
- [PostgreSQL](https://www.postgresql.org/) (if using PostgreSQL as your database)

---

## 1. Clone the Repository

```sh
git clone <your-repository-url>
cd <your-project-directory>
```

---

## 2. Install Dependencies

```sh
yarn install
# or
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```ini
# Server Configuration
HOST=0.0.0.0
PORT=1337

# Secrets (Replace with your actual secrets)
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
JWT_SECRET=

# Database Configuration
DATABASE_CLIENT="postgres"
DATABASE_HOST="localhost"
DATABASE_PORT="5432"
DATABASE_NAME="your_database_name"
DATABASE_USERNAME="your_database_user"
DATABASE_PASSWORD="your_database_password"
DATABASE_SCHEMA="public"

# SSL Configuration (if applicable)
DATABASE_SSL=false
DATABASE_SSL_KEY=
DATABASE_SSL_CERT=
DATABASE_SSL_CA=
DATABASE_SSL_CAPATH=
DATABASE_SSL_CIPHER=
DATABASE_SSL_REJECT_UNAUTHORIZED=true

# Connection Pooling
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10

# Connection Timeout (in milliseconds)
DATABASE_CONNECTION_TIMEOUT=60000
```

Replace `your_database_name`, `your_database_user`, and `your_database_password` with your actual PostgreSQL credentials.

---

## 4. Configure Database Connection

Strapi supports multiple databases. The configuration for PostgreSQL is defined in `config/database.js`:

```javascript
import path from "path";

export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const connections = {
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
```

Ensure that your `.env` file matches the required configuration.

---

## 5. Run the Strapi Server

### Start Development Server

```sh
yarn develop
# or
npm run develop
```

This will start the Strapi CMS in development mode, allowing hot-reloading.

### Start Production Server

```sh
yarn build
yarn start
# or
npm run build
npm start
```

---

## 6. Access the Strapi Admin Panel

Once the server is running, open your browser and navigate to:

```
http://localhost:1337/admin
```

Create an admin account to start managing your content.

---

## 7. Deploying Strapi

For production deployment, consider using:

- [DigitalOcean](https://www.digitalocean.com/)
- [Heroku](https://www.heroku.com/)
- [Vercel](https://vercel.com/) (for frontend, Strapi requires a separate backend hosting)
- [AWS](https://aws.amazon.com/)

Ensure you set up your `.env` variables accordingly in your hosting environment.

---

## 8. Additional Configuration

### Reset Admin User (If Needed)

```sh
yarn strapi admin:reset-user --email=your-email@example.com
```

This command resets the admin user in case you lose access.

---

## Conclusion

You have successfully set up Strapi CMS! You can now start creating content types, managing API endpoints, and integrating your frontend with Strapi.

For further customization, visit the Strapi Documentation.

