import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

const start = async() => {
  
  try {
    
    
    app.listen(PORT, () =>
      console.log(`Server stared on port = ${PORT}`),
    );
  } catch (error) {
    console.log('Error: ', error);
  }
};

start();