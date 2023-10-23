import Pick from '../models/picks';
import User, { IUser } from '../models/user';
import GameOutcome from '../models/gamesOutcome';

export const calculatePointsForWeek = async (week: number) => {
  const outcomes = await GameOutcome.findOne({ week });
  const picksForWeek = await Pick.find({ week });

  picksForWeek.forEach(async (userPicks) => {
    let points = 0;
    userPicks.picks.forEach(async (pick) => {
        const outcomes = await GameOutcome.findOne({ week });
        if (!outcomes) {
            throw new Error("No outcomes found for the specified week.");
        }
        
      // Logic to calculate points based on outcome and pick
      // Update the points variable accordingly
    });

    // Update user's total points
    const user = await User.findById(userPicks.userId) as IUser;
if (!user) {
    throw new Error("User not found!");
}
user.totalPoints = (user.totalPoints || 0) + points; // This handles the possibility of totalPoints being undefined
await user.save();

  });
};

