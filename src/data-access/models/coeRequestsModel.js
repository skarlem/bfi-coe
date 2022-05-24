const mongoose = require('mongoose');


const coeSchema = mongoose.Schema({
    uuid:{
        type: String,
        required: true
    },
    title_status:{
        type: String,
        required: true,
    },
    type_of_coe:{
        type: String,
        required: true,
    },
    employee_name:{
        type: String,
        required: true,
    },
    employee_id_number:{
        type: Number,
        required: true,
    },

    place_of_assignment:{
        type: String,
        required: true,
    },
    employee_department:{
        type: String,
        required: true,
    },
    employee_position:{
        type: String,
        required: true,
    },
    purpose_of_request:{
        type: String,
        default: null,
    },
    business_establishment:{
        type: String,
        default: null,
    },
    contract_start_date:{
        type: String,
        default: null,
    },
    // end_date:{
    //     type: String,
    //     default: null,
    // },
    contract_end_date:{
        type: String,
        default: null,
    },
    approver:{
        type: String,
        default: null,
    },
    issuance_date:{
        type: String,
        default: null,
    },
    document_link:{
        type: String,
        default: null,
    },
    printed:{
        type: String,
        default: null,
    },
    signed:{
        type: String,
        required: false,
    },
    issued:{
        type: String,
        default: null,
    },
    
    timestamp:{
		type: String,
        default: null,
		// default: Date.now
	},
    printed_date:{
        type: String,
        default: null,
    },
    signed_date:{
        type: String,
        default: null,
    },
    issued_date:{
		type: String,
        default: null,
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