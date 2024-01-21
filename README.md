# First_Node_API
1.Clone the .env.example file and create the .env file.

2.Execute the command: ```docker compose up -d```

3.Rebuild the Prisma client: ```npm run prisma:migrate:prod```
   ```
    "prisma:migrate:prod": "prisma migrate deploy",
   ```