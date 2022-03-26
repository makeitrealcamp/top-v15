import { connect } from 'mongoose';

export async function connectDB(): Promise<void> {
  try {
    await connect('mongodb://localhost:27017/users');
    console.log('connection stablished successfully')
  } catch(e: any) {
    console.log('connection could not be stablished')
  }
}
