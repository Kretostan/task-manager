import {Document, Schema, model, models} from "mongoose";
import bcrypt from "bcryptjs";
import {IUser} from "@/types/common";

const userSchema = new Schema<IUser & Document>({
  provider: { type: String, required: true, default: "local" },
  providerId: String,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: String,
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: "Task",
  }],
  stats: {
    total: { type: Number, required: true, default: 0 },
    completed: { type: Number, required: true, default: 0 },
    inProgress: { type: Number, required: true, default: 0 },
    rate: { type: Number, required: true, default: 0 },
  },
});

userSchema.pre<IUser & Document>("save", async function (next) {
  if (!this.isModified("password")) return next();
  if (!this.password) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export const User = models.User || model<IUser & Document>("User", userSchema);
