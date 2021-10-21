const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
	{
		todo: {
            type: String,
            required: true
		},
		todoOwner: {
			type: mongoose.Schema.ObjectId,
            ref: "user",
            required: true
		},
		done: {
            type: Boolean,
            default: false
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("todo", TodoSchema);
