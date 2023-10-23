import mongoose from 'mongoose';

const gameOutcomeSchema = new mongoose.Schema({
  week: {
    type: Number,
    required: true
  },
  outcomes: [{
    team: {
      type: String,
      required: true
    },
    result: {  // win, loss, push, etc.
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }]
});

const GameOutcome = mongoose.model('GameOutcome', gameOutcomeSchema);

export default GameOutcome;
