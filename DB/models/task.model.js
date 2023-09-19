import { Schema, model, Types } from "mongoose";

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      lowercase: true
    },
    questions: [{
      type: Types.ObjectId, ref: "Assignment"
    }]
  },
  {
    timestamps: true,
  }
);

const taskModel = model("Task", taskSchema);

export default taskModel
