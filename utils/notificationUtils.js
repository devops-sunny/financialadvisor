const User = require('../models/userModel.js');

exports.sendNotification = async (userId, notification) => {
  try {
    await User.findByIdAndUpdate(userId, {
      $push: { unseenNotifications: notification },
    });
  } catch (err) {
    console.error(err.message);
  }
};

exports.markNotificationsAsSeen = async (userId) => {
  try {
    const user = await User.findById(userId);
    user.seenNotifications = user.seenNotifications.concat(user.unseenNotifications);
    user.unseenNotifications = [];
    await user.save();
  } catch (err) {
    console.error(err.message);
  }
};
