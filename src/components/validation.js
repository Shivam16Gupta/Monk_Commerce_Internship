export default function validation(data) {

    let errors = {};

    if (!data.name.trim()) {
        errors.name = 'Full name required';
    }


    if (!data.states) {
        errors.states = 'State Required';
    }

    if (!data.landmark) {
        errors.landmark = 'Landmark Required';
    }


    if (!data.number) {
        errors.number = 'Phone number required';
    } else if (data.number.length !== 10) {
        errors.number = 'Invalid phone number';
    }

    if (!data.city) {
        errors.city = 'City required';
    }

    if (!data.line1) {
        errors.line1 = 'Residence required';
    }

    if (!data.pincode) {
        errors.pincode = 'Pincode required';
    } else if (data.pincode.length !== 6) {
        errors.pincode = 'Invalid pincode';
    }

    return errors;

}
