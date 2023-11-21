const mongoose = require('mongoose')
const userData = new mongoose.Schema({
    cn:{
        type: String
    },
    name:{
        type: String
    },
    cf:{
        type: Number
    },
    jan:{
        type: Number
    },
    feb:{
        type: Number
    },
    mar:{
        type: Number
    },
    apr:{
        type: Number
    },
    may:{
        type: Number
    },
    jun:{
        type: Number
    },
    jul:{
        type: Number
    },
    aug:{
        type: Number
    },
    sep:{
        type: Number
    },
    oct:{
        type: Number
    },
    nov:{
        type: Number
    },
    dec:{
        type: Number
    },
    jan_ml:{
        type: Number
    },
    feb_ml:{
        type: Number
    },
    mar_ml:{
        type: Number
    },
    apr_ml:{
        type: Number
    },
    may_ml:{
        type: Number
    },
    jun_ml:{
        type: Number
    },
    jul_ml:{
        type: Number
    },
    aug_ml:{
        type: Number
    },
    sep_ml:{
        type: Number
    },
    oct_ml:{
        type: Number
    },
    nov_ml:{
        type: Number
    },
    dec_ml:{
        type: Number
    }
})
const User = mongoose.model("User",userData)
module.exports = User