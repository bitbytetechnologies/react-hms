import { setFormattedDate } from "./Helpers";

//export const API_URL = 'https://node-server-travel.herokuapp.com'
export const API_URL = 'http://localhost:3200'


const date = new Date()
const time = date.toISOString().substring(11, 16);


export const USER_OBJECT = {
    "id": 0,
    "username": "",
    "password": "",
    "email": "",
    "role_id": 0,
    "is_active": 1,
    "dob": "",
    "account_no": "",
    "bsb": "",
    "account_title": "",
    "mobile_no": "",
    "nationality": "",
    "address": "",
    "emergency_contact": "",
    "ndis_no": "",
    "wwc_no": "",
    "car_reg_no": "",
    "drv_lic_no": "",
    "level_of_work": "",
    "disability_type": "",
    "parent_gaurdian_details": "",
    "last_address": "",
    "what_like": "",
    "pg_doctor": "",
    "pg_doctor_contact_no": "",
    "pg_doctor_address": ""
}


export const STAFF_OBJECT = {
    staff_id: 0,
    hours: "0",
    from_date: setFormattedDate(new Date()),
    to_date: setFormattedDate(new Date()),
    from_time: time,
    to_time: time
}


export const MANAGER_REQUEST_OBJECT = {
    "datetime": setFormattedDate(date),
    "client_user_id": 0,
    "loc_attu": "2.123456",
    "loc_long": "4.23456",
    "request_status": "SENT",
    "from_date": setFormattedDate(date),
    "to_date": setFormattedDate(date),
    "req_hours": 10,
    "staff_id": 0,
    "from_time": time,
    "to_time": time,
    "city": ".",
    "country": ".",

}


export const PROGRESS_OBJECT = {
    "staff_id": 0,
    "roster_id": 0,
    "roster_date": setFormattedDate(new Date()),
    "from_time": time,
    "to_time": time,
    "details": ""
}

export const MEDICATION_OBJECT = [
    {
        "date": setFormattedDate(date),
        "roster_id": 0,
        "type": "Morning",
        "is_taken": 0,
        "details": "",
        "created_by": 0, //Staff ID
        "vkey": ''
    },
    {
        "date": setFormattedDate(date),
        "roster_id": 0,
        "type": "Afternoon",
        "is_taken": 0,
        "details": "",
        "created_by": 0, //Staff ID
        "vkey": ''
    },
    {
        "date": setFormattedDate(date),
        "roster_id": 0,
        "type": "Evening",
        "is_taken": 0,
        "details": "",
        "created_by": 0, //Staff ID
        "vkey": ''
    },
    {
        "date": setFormattedDate(date),
        "roster_id": 0,
        "type": "Bed time",
        "is_taken": 0,
        "details": "",
        "created_by": 0, //Staff ID
        "vkey": ''
    },
]

export const CLIENT_REQUEST_OBJECT = {
    "datetime": setFormattedDate(date),
    "client_user_id": 0,
    "city": "Canbera",
    "country": "Aus",
    "loc_attu": "2.123456",
    "loc_long": "4.23456",
    "request_status": "SENT",
    "from_date": setFormattedDate(date),
    "to_date": setFormattedDate(date),
    "req_hours": 10
}


export const CLIENT_FEEBACK_OBJECT = {
    "staff_id": 0,
    "client_id": 0,
    "details": ""
}

export const INCIDENT_OBJECT = {

    "date": setFormattedDate(date),
    "support_worder": "Supported Worker edit",
    "report_completed_by": "Report completed By Tariq",
    "medications": "Peracitamol",
    "medication_due_time": time,
    "dose_should_given": "Dose Should Given Webster pack",
    "dose_given": "Dose Given Webster pack",
    "describe_medication_incident": "I mistakenly open Monday morning medications instead of Wednesday morning medications, but it was the same dose.",
    "resson_for_incident": "I mistakenly open Monday morning medications instead of Wednesday morning medications.",
    "action_taken": "",
    "coodinator_notified": "1",
    "doctor_notified": "1",
    "pharmacist_notified": "1",
    "kin_notified": "1",
    "treatment_by": "Dr.munned mohammad. ",
    "coordinator_to_complete": "coordic=nator Completed By",
    "evaluation": "evaluation",
    "issue_resolved": "1",
    "no_improvement": "0",
    "improvement_describe": "improvement describe",
    "closed_outcome": "close outcome",
    "roster_id": 0,
    "filled_by_user": 0,
    "id": 0,
    "type": ''

}