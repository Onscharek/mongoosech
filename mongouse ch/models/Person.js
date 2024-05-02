// require mongoose
const mongoose =require("mongoose");
// schema
const personSchema = new Schema ( {
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    favoriteFoods : {
        type: Array,
    }})

    module.exports = person =mongoose.model("person" , personSchema);