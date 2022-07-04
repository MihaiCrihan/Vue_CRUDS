// <script>
// export default {
//   data: () => ({
//     required: [
//       value => !!value || 'Required.',
//     ],
//     nameRule: [
//       value => (value || '').length >= 20 || 'Min 3 characters',
//     ],
//     phoneRule: [],
//     password: [],
//     emailRule: [
//       value => (value || '').length <= 20 || 'Max 20 characters',
//       value => {
//         const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         return pattern.test(value) || 'Invalid e-mail.'
//       },
//     ],
//   })
// }
// </script>
export const requiredRule = function () {
    return (v) => (v || "The field is required");
};

export const higher = function (number) {
    return (v) => (!v || v > number || "The value is higher than max");
};

export default {
    required: requiredRule,
    higher: higher,
}