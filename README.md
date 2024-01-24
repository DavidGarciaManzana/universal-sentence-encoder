# Universal sentence encoder
A model that encodes question and answer texts into 100-dimensional embeddings is used. The dot product of these embeddings measures how well the answer fits the question.
1.Clone the .env.example file and create the .env file.

2.Execute the command: ```docker compose up -d```

3.Rebuild the Prisma client: ```npm run prisma:migrate:prod```
   ```
    "prisma:migrate:prod": "prisma migrate deploy",
   ```