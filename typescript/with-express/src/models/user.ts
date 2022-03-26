import { model, Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  // tasks: ITask["_id"][];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema({
  email: String,
  password: String,
  // tasks: {
  //   type: [{ ref: 'Task', type: Schema.Types.ObjectId }]
  // }
}, {
  timestamps: true,
});

export const User = model<IUser>('User', userSchema);
