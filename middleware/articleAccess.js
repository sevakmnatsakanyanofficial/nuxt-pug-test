export default ((to, from) => {
    return /^\d+$/.test(to.params.id);
})