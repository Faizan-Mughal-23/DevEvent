import { Schema, model, models, Document, Types } from 'mongoose';

export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address',
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Index to optimize query performance for event bookings
BookingSchema.index({ eventId: 1, email: 1 });

const Booking = models?.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;
