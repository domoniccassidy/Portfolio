import mongoose from "mongoose";
import Bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = Bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (original, callback) {
  return callback(null, Bcrypt.compareSync(original, this.password));
};

export default mongoose.model("user", userSchema);
