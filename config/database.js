import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false; // Track the connection status

const connectDB = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    // Set Mongoose options for improved connection handling
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout for initial connection
      socketTimeoutMS: 45000,         // 45 seconds socket timeout
      autoIndex: true,                // Enable autoIndex creation
    });

    isConnected = connection.connection.readyState === 1; // Check if connected
    console.log('MongoDB connected successfully:', connection.connection.host);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);

    // Retry logic for transient errors
    if (error.name === 'MongoNetworkError' || error.name === 'MongooseServerSelectionError') {
      console.log('Retrying MongoDB connection in 5 seconds...');
      setTimeout(connectDB, 5000); // Retry after 5 seconds
    } else {
      process.exit(1); // For fatal errors, exit the process
    }
  }

  // Event listeners for MongoDB connection lifecycle
  mongoose.connection.on('disconnected', () => {
    isConnected = false;
    console.warn('MongoDB disconnected. Attempting to reconnect...');
    connectDB();
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB encountered an error:', err.message);
  });
};

export default connectDB;
