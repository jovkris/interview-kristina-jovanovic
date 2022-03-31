module.exports = mongoose => {
    const Todo = mongoose.model(
        "todo",
        mongoose.Schema(
            {
                text: String,
                isComplete: Boolean
            },
            { timestamps: true }
        )
    );
    return Todo;
};