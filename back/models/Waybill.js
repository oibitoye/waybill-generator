const mongoose = require('mongoose');

const waybillSchema = new mongoose.Schema({
  waybillNumber: {
    type: Number,
    required: false,
    unique: true,
  },
  creator: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  truckSize: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  truckWeight: {
    type: Number,
    required: true,
  },
  truckGross: {
    type: Number,
    required: true,
  },
  truckNet: {
    type: Number,
    required: true,
  },
  itemDesc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define a pre-save hook to auto-increment the waybillNumber
waybillSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const lastWaybill = await this.constructor.findOne({}, {}, { sort: { waybillNumber: -1 } });
      const lastNumber = lastWaybill ? lastWaybill.waybillNumber : 0;
      this.waybillNumber = lastNumber + 1;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const Waybill = mongoose.model('Waybill', waybillSchema);

module.exports = Waybill;
