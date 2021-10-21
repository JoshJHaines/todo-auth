const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
	{
		todo: {
			type: String,
		},
		todoDetails: {
			type: String,
		},
		todoOwner: {
			type: mongoose.Schema.ObjectId,
			ref: "user",
		},
		done: {
			type: Boolean,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("todo", TodoSchema);
