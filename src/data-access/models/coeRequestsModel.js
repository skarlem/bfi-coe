const mongoose = require('mongoose');


const coeSchema = mongoose.Schema({
    // uuid:{
    //     type: String,
    //     required: true
    // },
    employee_name:{
        type: String,
        required: true,
    },
    employee_id_number:{
        type: Number,
        required: true,
    },
    business_establishment:{
        type: String,
        required: true,
    },
    place_of_assignment:{
        type: String,
        required: true,
    },
    employee_position:{
        type: String,
        required: true,
    },
    purpose_of_request:{
        type: String,
        required: true,
    },
    employee_status:{
        type: String,
        required: true,
    },
    timestamp:{
		type: String,
        required: true,
		// default: Date.now
	}

})

const CoeSchemaModel = module.exports = mongoose.model('requests',coeSchema);

// Coe.findAll();
// module.exports.addNewRequest = (info,callback) => {
//     CoeSchemaModel.create(info,callback)
// }

// module.exports.getAllRequests = (callback, limit) => {
// 	CoeSchemaModel.find(callback).limit(limit);
// }

// uuid: '3d44cd67-e969-469e-96d6-54960a062030',
//     timestamp: '28/04/2022 13:51:14',
//     employee_name: 'Kenneth Po',
//     employee_id_number: '151797',
//     business_establishment: 'SSS',
//     place_of_assignment: 'Information Technology Group',
//     employee_position: 'Software Quality Assurance',
//     purpose_of_request: 'Cash Loan',
//     employee_status: 'Active'