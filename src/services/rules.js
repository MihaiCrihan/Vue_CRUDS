export const requiredRule = function () {
    return (v) => (!!v || "The field is required");
};

export const nameRule = function () {
    return (v) => ((v || '').length >= 3 || 'Min 3 characters');
};

export const min = function (number) {
    return (v) => (!v || v.length >= number || `The value is higher than ${number}`);
};

export const email = function () {
    return (v) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'Invalid e-mail.'
    }
};

export const phone = function () {
    return (v) => {
        const pattern = /^[0-9]{9}$/
        return pattern.test(v) || 'Invalid phone number.'
    }
};

export const select = function () {
    return (v) => (v.length > 0 || "The field is required")
};

export default {
    required: requiredRule,
    min: min,
    name: nameRule,
    email: email,
    phone: phone,
    select: select,
}