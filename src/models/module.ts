import mongoose, { Schema } from 'mongoose'

const moduleSchema = new Schema(
  {
    title: String,
    key: String
  },
  {
    timestamps: true
  }
)

const Module = mongoose.models.Module || mongoose.model('Module', moduleSchema);

export default Module