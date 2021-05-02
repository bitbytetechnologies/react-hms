import { setFormattedDate } from "./Helpers";

//export const API_URL = 'https://node-server-travel.herokuapp.com'
export const API_URL = 'http://localhost:3200'

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

const date = new Date()
const time = date.toISOString().substring(11, 16);

export const STAFF_OBJECT = {
    staff_id: 0,
    hours: "0",
    from_date: setFormattedDate(new Date()),
    to_date: setFormattedDate(new Date()),
    from_time: time,
    to_time: time
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
        "created_by": 0 //Staff ID
    },
    {
        "date": setFormattedDate(date),
        "roster_id": 0,
        "type": "Afternoon",
        "is_taken": 0,
        "details": "",
        "created_by": 0 //Staff ID
    },
    {
        "date": setFormattedDate(date),
        "roster_id": 0,
        "type": "Evening",
        "is_taken": 0,
        "details": "",
        "created_by": 0 //Staff ID
    },
    {
        "date": setFormattedDate(date),
        "roster_id": 0,
        "type": "Bed time",
        "is_taken": 0,
        "details": "",
        "created_by": 0 //Staff ID
    },
]
